import type { NextApiRequest, NextApiResponse } from "next";
import sharp from 'sharp';
import { IncomingForm } from 'formidable';
import { copyFileSync, existsSync, mkdirSync, readdirSync, unlinkSync } from "fs";

import pathToFfmpeg from 'ffmpeg-static';

import util from 'util';
import {exec as _exec} from 'child_process';
import { shuffle } from "lodash";
import { isFile, prepareParams } from "../../utils/common";
import { loadTexts } from "../../utils/svg";
import { calculateCropInfo } from "../../utils/images";

const exec = util.promisify(_exec);

// const util = require('util');
// const exec = util.promisify(require('child_process').exec);
// import ffmpeg from 'fluent-ffmpeg';

const delay = (delayInms: number) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

export const config = {
    api: {
        bodyParser: false
    }
};

const outFolder = './out';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const form = new IncomingForm();
    form.parse(req, async function (_err, _fields, files) {
        if (isFile(files.file)) {
            console.log({filepath: files?.file});
            const imgBuffer = await crop(files?.file?.filepath, files.file);
            res.setHeader('Content-Type', 'image/png');
            return res.status(200).send(imgBuffer);
        }
        return res.status(400).send("");
    });

    const {amplitude, rotation, duration, cropInfo, variant} = prepareParams(req);
    
    async function crop(filePath: string, fileInfo: any) {

        if(!existsSync(outFolder)) {
            mkdirSync(outFolder);
        }

        if(!existsSync(`${outFolder}/frames`)) {
            mkdirSync(`${outFolder}/frames`);
        }


        if(!existsSync(`${outFolder}/video`)) {
            mkdirSync(`${outFolder}/video`);
        }

        if(!existsSync(`${outFolder}/source`)) {
            mkdirSync(`${outFolder}/source`);
        }

        if(!existsSync(`${outFolder}/sourceVideo`)) {
            mkdirSync(`${outFolder}/sourceVideo`);
        }

        const files = readdirSync(`${outFolder}/frames`);

        for (const f of files) {
            unlinkSync(`${outFolder}/frames/${f}`);
        }

        const sourceFiles = readdirSync(`${outFolder}/source`);

        for (const f of sourceFiles) {
            unlinkSync(`${outFolder}/source/${f}`);
        }

        const sourceVideos = readdirSync(`${outFolder}/sourceVideo`);

        for (const f of sourceVideos) {
            unlinkSync(`${outFolder}/sourceVideo/${f}`);
        }

        const vodeos = readdirSync(`${outFolder}/video`);

        for (const f of vodeos) {
            unlinkSync(`${outFolder}/video/${f}`);
        }

        const {newFilename, mimetype} = fileInfo;

        const mt = mimetype.split('/');

        if (mt[0] !== 'video') {
            return null;
        }

        const fileName = `${outFolder}/sourceVideo/${newFilename}.${mt[1]}`;

        copyFileSync(filePath, fileName);
        
        await exec(`"${pathToFfmpeg}" -i ${fileName} ${outFolder}/source/fileName%03d.png`);

        const texts = loadTexts({
            variant,
            amplitude,
        })


        const sourceFrames = readdirSync(`${outFolder}/source`);
        let i = 0;
        for (const f of sourceFrames) {
            if (i % 20 === 0) {
                console.log({i, total: sourceFrames.length});
            }
            
            i++;

            const dogImage = sharp(`${outFolder}/source/${f}`);
            dogImage.metadata()
            const metadata = await dogImage.metadata();

            // const meta = await sharp(await dogImage.toBuffer()).metadata();
    
            // console.log(`Rotated image size is ${meta.width}x${meta.height}`);
    
            // console.log(`Cropping...`, cropInfo);
    
            // console.log('got here - 3');
            const cropInfoCalculated = metadata.width && metadata.height ? calculateCropInfo(metadata.width, metadata.height) : undefined;
            const dogImageCropped = cropInfoCalculated ? dogImage.extract(cropInfoCalculated) : dogImage;
            // console.log('got here - 4', cropInfo);
            const dogImageResized = dogImageCropped.resize(994, 994);



            await dogImageResized
                .composite([
                    texts.wBottom?.(i*0.2),
                    texts.wTop?.(i*0.1),
                    texts.wCenter?.(i*0.15),
                    texts.wLeft?.(i*0.25),
                ].filter(Boolean))
                .png()
                .toFile(`${outFolder}/frames/${i}.png`);
        }



        // const frames = readdirSync(`${outFolder}/frames`);
        const publicFolder = readdirSync(`./public`);

        
        const audios = publicFolder.filter((file) => file.includes('.aac'));
        
        const shuffled = shuffle(audios);
        // console.log({publicFolder, audios, shuffled});
        const audio = `./public/${shuffled[0]}`;

        await delay(3000);

        // const images = frames.map(img => `${outFolder}/frames/${img}` );

        const outputFolder = `${outFolder}/frames`;
        const videoEncoder = 'h264';
        console.log('Encoding');
        await exec(`"${pathToFfmpeg}" -start_number 1 -i ${outputFolder}/%d.png -vcodec ${videoEncoder} -pix_fmt yuv420p ${outFolder}/video/no-audio.mp4`);

        // Copy audio from original video
        console.log('Adding audio', audio);
        await exec(`"${pathToFfmpeg}" -i ${outFolder}/video/no-audio.mp4 -i ${audio} -shortest ${outFolder}/video/with-audio-${new Date().getTime()}.mp4`);

        try {
            await exec(`ffmpeg -i ${outFolder}/video/no-audio.mp4 -i ${fileName} -c copy -map 0:v:0 -map 1:a:0 ${outFolder}/video/original-audio-${new Date().getTime()}.mp4`);
        } catch (e) {
            console.log(e);
        }

        console.log('done');


        const dogImage = sharp(`${outFolder}/frames/1.png`);

        return await dogImage
            .png()
            .toBuffer();
    }

};

const crop = (req: NextApiRequest, res: NextApiResponse) => {
    req.method === "POST"
      ? handler(req, res)
      : req.method === "PUT"
      ? console.log("PUT")
      : req.method === "DELETE"
      ? console.log("DELETE")
      : req.method === "GET"
      ? console.log("GET")
      : res.status(404).send("");
  };

  export default crop;
