import type { NextApiRequest, NextApiResponse } from "next";
import sharp from 'sharp';
import { IncomingForm } from 'formidable';
// import getChAdultBottomSvg from "../../utils/svg/chineese-adult/chineese-bottom-ink";

// import {genColors} from '../../utils/genColors';
// import getChAdultTopSvg from "../../utils/svg/chineese-adult/chineese-top-ink";
// import getChAdultCenterSvg from "../../utils/svg/chineese-adult/chineese-center-ink";
// import getChAdultLeftSvg from "../../utils/svg/chineese-adult/chineese-left-ink";
import { wiggle } from "../../utils/wiggle";
import { existsSync, mkdirSync, readdirSync, unlinkSync } from "fs";

import pathToFfmpeg from 'ffmpeg-static';

import util from 'util';
import {exec as _exec} from 'child_process';
import { shuffle } from "lodash";
import { isFile, prepareParams } from "../../utils/common";
import { getChineeseText, getSvgByVariant } from "../../utils/svg";

const exec = util.promisify(_exec);

enum CloakImageTypes {
    BlackAndWhite = 'blackAndWhite',
    GreyScale = 'greyScale',
    Blur = 'blur',
}

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

// const isFile = (file: File | File[]): file is File => {
//     return (file as File).filepath !== undefined;
// }

const outFolder = './out';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('start handler');
    const form = new IncomingForm();
    let image = null;
    form.parse(req, async function (_err, fields, files) {
        console.log(files);
        image = fields.file;
        if (isFile(files.file) && isFile(files?.fileBlack)) {
            const imgBuffer = await crop(files?.file?.filepath, files?.fileBlack?.filepath);
            res.setHeader('Content-Type', 'image/png');
            return res.status(200).send(imgBuffer);
        } else {
            console.log(files);
        }
        return res.status(400).send("");
    });
    const {rotation, cropInfo, cropInfoBlack, variant} = prepareParams(req);

    // const rotation = parseFloat((req.query.rotation as string) ?? "0");
    // const cropInfo = {
    //     left: parseFloat((req.query.x as string) ?? "0"),
    //     top: parseFloat((req.query.y as string) ?? "0"),
    //     width: parseFloat((req.query.width as string) ?? "100"),
    //     height: parseFloat((req.query.height as string) ?? "100")
    // };
    // const cropInfoBlack = {
    //     left: parseFloat((req.query.xBlack as string) ?? "0"),
    //     top: parseFloat((req.query.yBlack as string) ?? "0"),
    //     width: parseFloat((req.query.widthBlack as string) ?? "100"),
    //     height: parseFloat((req.query.heightBlack as string) ?? "100")
    // };
    
    async function crop(imgPath: string, imgPathBlack?: string) {
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

        // const chBottom = getChineeseText(getChAdultBottomSvg);
        // const chTop = getChineeseText(getChAdultTopSvg);
        // const chCenter = getChineeseText(getChAdultCenterSvg);
        // const chLeft = getChineeseText(getChAdultLeftSvg);
        
        console.log('got here - 3');
        const dogImageCropped = dogImage.extract(cropInfo);
        console.log('got here - 4', cropInfo);
        const size = 994;
        const dogImageResized = dogImageCropped.resize(size, size);

        const wBottom  = wiggle({
            input: getChineeseText(svgs.bottom),
            topBase: 700 + Math.floor(90 * Math.random()),
            leftBase: 210 + Math.floor(50 * Math.random()),
            maxDistance: 10,
        });

        const wTop  = wiggle({
            input: getChineeseText(svgs.top),
            topBase: 0 + Math.floor(90 * Math.random()),
            leftBase: 190 + Math.floor(90 * Math.random()),
            maxDistance: 10,
        });

        const wCenter  = wiggle({
            input: getChineeseText(svgs.center),
            topBase: 500 + Math.floor(120 * Math.random()),
            leftBase: 220 + Math.floor(50 * Math.random()),
            maxDistance: 10,
        });

        const wLeft  = wiggle({
            input: getChineeseText(svgs.left),
            topBase: 0 + Math.floor(90 * Math.random()),
            leftBase: 0 + Math.floor(90 * Math.random()),
            maxDistance: 10,
        });

        const sizeS = Math.floor(size/2.5 + Math.random());
        let flightImage = sharp(imgPathBlack || 'public/ready.jpg').extract(cropInfoBlack).resize(sizeS, sizeS);

        const secondImage  = wiggle({
            input: await flightImage.toBuffer(),
            topBase: 230 + Math.floor(150 * Math.random()),
            leftBase: 390 + Math.floor(190 * Math.random()),
            maxDistance: 5,
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


        for (let i = 0; i < 450; i++) {
            if (i % 20 === 0) {
                console.log({i});
            }
            
            

            await dogImageResized
                .composite([
                    secondImage(i*0.3),
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
        console.log('Adding audio');
        await exec(`"${pathToFfmpeg}" -i ${outFolder}/video/no-audio.mp4 -i ${audio} -shortest ${outFolder}/video/with-audio-${new Date().getTime()}.mp4`);

        console.log('done');


        return await dogImageResized
            .composite([
                {
                    input: getChineeseText(svgs.bottom),
                    top: 700 + Math.floor(90 * Math.random()),
                    left: 210 + Math.floor(50 * Math.random()),
                },
                {
                    input: getChineeseText(svgs.top),
                    top: 0 + Math.floor(90 * Math.random()),
                    left: 210 + Math.floor(90 * Math.random()),
                },
                {
                    input: getChineeseText(svgs.center),
                    top: 500 + Math.floor(120 * Math.random()),
                    left: 220 + Math.floor(50 * Math.random()),
                },
                {
                    input: getChineeseText(svgs.left),
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
