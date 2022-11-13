import type { NextApiRequest, NextApiResponse } from "next";
import sharp from 'sharp';
import { IncomingForm } from 'formidable';
import { existsSync, mkdirSync, readdirSync, unlinkSync } from "fs";

import pathToFfmpeg from 'ffmpeg-static';

import util from 'util';
import {exec as _exec} from 'child_process';
import { shuffle } from "lodash";
import { isFile, prepareParams } from "../../utils/common";
import { loadTexts } from "../../utils/svg";

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
    // let image = null;
    form.parse(req, async function (_err, _fields, files) {
        // image = fields.file;
        if (isFile(files.file)) {
            const imgBuffer = await crop(files?.file?.filepath);
            res.setHeader('Content-Type', 'image/png');
            return res.status(200).send(imgBuffer);
        }
        return res.status(400).send("");
    });

    const {amplitude, rotation, duration, cropInfo, variant, ratio} = prepareParams(req);
    
    async function crop(imgPath: string) {
        const dogImage = sharp(imgPath);
        dogImage.metadata()
        await dogImage.metadata().then((metadata) => {
            console.log(`Source image size is ${metadata.width}x${metadata.height}`);
        });

        console.log(`Rotating... ${rotation} degrees`);
        await dogImage.rotate(rotation);

        const meta = await sharp(await dogImage.toBuffer()).metadata();

        console.log(`Rotated image size is ${meta.width}x${meta.height}`);

        console.log(`Cropping...`, cropInfo);
        let totalWidth = Math.round(ratio >= 1 ? 1000 : 1000  * ratio);
        let totalHeight = Math.round(ratio <= 1 ? 1000 : 1000 / ratio);

        if (totalWidth % 2) {
            totalWidth += 1;
        }

        if (totalHeight % 2) {
            totalHeight += 1;
        }

        const texts = loadTexts({
            variant,
            amplitude,
            totalWidth,
            totalHeight,
        });

        if(!existsSync(outFolder)) {
            mkdirSync(outFolder);
        }

        if(!existsSync(`${outFolder}/frames`)) {
            mkdirSync(`${outFolder}/frames`);
        }


        if(!existsSync(`${outFolder}/video`)) {
            mkdirSync(`${outFolder}/video`);
        }

        const files = readdirSync(`${outFolder}/frames`);

        for (const f of files) {
            unlinkSync(`${outFolder}/frames/${f}`);
        }

        const videos = readdirSync(`${outFolder}/video`);

        for (const f of videos) {
            unlinkSync(`${outFolder}/video/${f}`);
        }


        console.log('got here - 3');
        const dogImageCropped = dogImage.extract(cropInfo);
        console.log('got here - 4', cropInfo);
        const dogImageResized = dogImageCropped.resize(totalWidth, totalHeight);


        for (let i = 0; i < duration; i++) {
            if (i % 20 === 0) {
                console.log({i});
            }

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
        await exec(`"${pathToFfmpeg}" -start_number 1 -i ${outputFolder}/%d.png -vcodec ${videoEncoder} -pix_fmt yuv420p ${outFolder}/video/${variant}-${amplitude}-${duration}-no-audio.mp4`);

        // Copy audio from original video
        console.log('Adding audio', audio);
        await exec(`"${pathToFfmpeg}" -i ${outFolder}/video/${variant}-${amplitude}-${duration}-no-audio.mp4 -i ${audio} -shortest ${outFolder}/video/${variant}-${amplitude}-${duration}-with-audio-${new Date().getTime()}.mp4`);

        console.log('done');

        return await dogImageResized
            // .composite([
            //     {
            //         input: chBottom,
            //         top: 700 + Math.floor(90 * Math.random()),
            //         left: 210 + Math.floor(50 * Math.random()),
            //     },
            //     {
            //         input: chTop,
            //         top: 0 + Math.floor(90 * Math.random()),
            //         left: 210 + Math.floor(90 * Math.random()),
            //     },
            //     {
            //         input: chCenter,
            //         top: 500 + Math.floor(120 * Math.random()),
            //         left: 220 + Math.floor(50 * Math.random()),
            //     },
            //     {
            //         input: chLeft,
            //         top: 0 + Math.floor(90 * Math.random()),
            //         left: 0 + Math.floor(90 * Math.random()),
            //     },
            // ])
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
