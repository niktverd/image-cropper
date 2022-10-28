import type { NextApiRequest, NextApiResponse } from "next";
import sharp from 'sharp';
import { IncomingForm } from 'formidable';
import getChAdultBottomSvg from "../../utils/svg/chineese-adult/chineese-bottom-ink";
import getChAdultTopSvg from "../../utils/svg/chineese-adult/chineese-top-ink";
import getChAdultCenterSvg from "../../utils/svg/chineese-adult/chineese-center-ink";
import getChAdultLeftSvg from "../../utils/svg/chineese-adult/chineese-left-ink";
import { wiggle } from "../../utils/wiggle";
import { existsSync, mkdirSync, readdirSync, unlinkSync } from "fs";

import pathToFfmpeg from 'ffmpeg-static';

import util from 'util';
import {exec as _exec} from 'child_process';
import { shuffle } from "lodash";
import { isFile, prepareParams } from "../../utils/common";
import { getChineeseText, getSvgByVariant } from "../../utils/svg";

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
    let image = null;
    form.parse(req, async function (err, fields, files) {
        image = fields.file;
        if (isFile(files.file)) {
            const imgBuffer = await crop(files?.file?.filepath);
            res.setHeader('Content-Type', 'image/png');
            return res.status(200).send(imgBuffer);
        }
        return res.status(400).send("");
    });

    const {amplitude, rotation, duration, cropInfo, variant} = prepareParams(req);
    
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

        const svgs = getSvgByVariant(variant);

        const chBottom = getChineeseText(svgs.bottom);
        const chTop = getChineeseText(svgs.top);
        const chCenter = getChineeseText(svgs.center);
        const chLeft = getChineeseText(svgs.left);
        
        console.log('got here - 3');
        const dogImageCropped = dogImage.extract(cropInfo);
        console.log('got here - 4', cropInfo);
        const dogImageResized = dogImageCropped.resize(994, 994);

        const wBottom  = wiggle({
            input: chBottom,
            topBase: 700 + Math.floor(90 * Math.random()),
            leftBase: 210 + Math.floor(50 * Math.random()),
            maxDistance: amplitude,
        });

        const wTop  = wiggle({
            input: chTop,
            topBase: 0 + Math.floor(90 * Math.random()),
            leftBase: 190 + Math.floor(90 * Math.random()),
            maxDistance: amplitude,
        });

        const wCenter  = wiggle({
            input: chCenter,
            topBase: 500 + Math.floor(120 * Math.random()),
            leftBase: 220 + Math.floor(50 * Math.random()),
            maxDistance: amplitude,
        });

        const wLeft  = wiggle({
            input: chLeft,
            topBase: 0 + Math.floor(90 * Math.random()),
            leftBase: 0 + Math.floor(90 * Math.random()),
            maxDistance: amplitude,
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

        const vodeos = readdirSync(`${outFolder}/video`);

        for (const f of vodeos) {
            unlinkSync(`${outFolder}/video/${f}`);
        }

        for (let i = 0; i < duration; i++) {
            if (i % 20 === 0) {
                console.log({i});
            }

            await dogImageResized
                .composite([
                    wBottom(i*0.2),
                    wTop(i*0.1),
                    wCenter(i*0.15),
                    wLeft(i*0.25),
                ])
                .png()
                .toFile(`${outFolder}/frames/${i}.png`);
        }



        const frames = readdirSync(`${outFolder}/frames`);
        const publicFolder = readdirSync(`./public`);

        
        const audios = publicFolder.filter((file) => file.includes('.aac'));
        
        const shuffled = shuffle(audios);
        // console.log({publicFolder, audios, shuffled});
        const audio = `./public/${shuffled[0]}`;

        await delay(3000);

        const images = frames.map(img => `${outFolder}/frames/${img}` );

        const outputFolder = `${outFolder}/frames`;
        const videoEncoder = 'h264';
        console.log('Encoding');
        await exec(`"${pathToFfmpeg}" -start_number 1 -i ${outputFolder}/%d.png -vcodec ${videoEncoder} -pix_fmt yuv420p ${outFolder}/video/no-audio.mp4`);

        // Copy audio from original video
        console.log('Adding audio', audio);
        await exec(`"${pathToFfmpeg}" -i ${outFolder}/video/no-audio.mp4 -i ${audio} -shortest ${outFolder}/video/with-audio-${new Date().getTime()}.mp4`);

        console.log('done');

        return await dogImageResized
            .composite([
                {
                    input: chBottom,
                    top: 700 + Math.floor(90 * Math.random()),
                    left: 210 + Math.floor(50 * Math.random()),
                },
                {
                    input: chTop,
                    top: 0 + Math.floor(90 * Math.random()),
                    left: 210 + Math.floor(90 * Math.random()),
                },
                {
                    input: chCenter,
                    top: 500 + Math.floor(120 * Math.random()),
                    left: 220 + Math.floor(50 * Math.random()),
                },
                {
                    input: chLeft,
                    top: 0 + Math.floor(90 * Math.random()),
                    left: 0 + Math.floor(90 * Math.random()),
                },
            ])
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
