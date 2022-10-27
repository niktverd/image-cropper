import type { NextApiRequest, NextApiResponse } from "next";
import sharp from 'sharp';
import { File, IncomingForm } from 'formidable';
import getChAdultBottomSvg from "../../utils/svg/chineese-adult/chineese-bottom-ink";

import {genColors} from '../../utils/genColors';
import getChAdultTopSvg from "../../utils/svg/chineese-adult/chineese-top-ink";
import getChAdultCenterSvg from "../../utils/svg/chineese-adult/chineese-center-ink";
import getChAdultLeftSvg from "../../utils/svg/chineese-adult/chineese-left-ink";
import { wiggle } from "../../utils/wiggle";
import { existsSync, mkdirSync, readdirSync, unlinkSync } from "fs";

import pathToFfmpeg from 'ffmpeg-static';

import util from 'util';
import {exec as _exec} from 'child_process';
import { shuffle } from "lodash";

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

const isFile = (file: File | File[]): file is File => {
    return (file as File).filepath !== undefined;
}

const outFolder = './out';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('start handler');
    const form = new IncomingForm();
    let image = null;
    form.parse(req, async function (err, fields, files) {
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

    const rotation = parseFloat((req.query.rotation as string) ?? "0");
    const cropInfo = {
        left: parseFloat((req.query.x as string) ?? "0"),
        top: parseFloat((req.query.y as string) ?? "0"),
        width: parseFloat((req.query.width as string) ?? "100"),
        height: parseFloat((req.query.height as string) ?? "100")
    };
    const cropInfoBlack = {
        left: parseFloat((req.query.xBlack as string) ?? "0"),
        top: parseFloat((req.query.yBlack as string) ?? "0"),
        width: parseFloat((req.query.widthBlack as string) ?? "100"),
        height: parseFloat((req.query.heightBlack as string) ?? "100")
    };
    
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

        const getChineeseText = (getterForSvg: any) => {
            const bottomColor = genColors();
            const resizeBottom = 0.85 + 0.1 * Math.random();
            const chLeft = getterForSvg({...bottomColor, resize: resizeBottom});
            // console.log(chLeft);
            return Buffer.from(chLeft);
        }
        const chBottom = getChineeseText(getChAdultBottomSvg);
        const chTop = getChineeseText(getChAdultTopSvg);
        const chCenter = getChineeseText(getChAdultCenterSvg);
        const chLeft = getChineeseText(getChAdultLeftSvg);
        
        console.log('got here - 3');
        const dogImageCropped = dogImage.extract(cropInfo);
        console.log('got here - 4', cropInfo);
        const size = 994;
        const dogImageResized = dogImageCropped.resize(size, size);

        const wBottom  = wiggle({
            input: chBottom,
            topBase: 700 + Math.floor(90 * Math.random()),
            leftBase: 210 + Math.floor(50 * Math.random()),
            maxDistance: 10,
        });

        const wTop  = wiggle({
            input: chTop,
            topBase: 0 + Math.floor(90 * Math.random()),
            leftBase: 190 + Math.floor(90 * Math.random()),
            maxDistance: 10,
        });

        const wCenter  = wiggle({
            input: chCenter,
            topBase: 500 + Math.floor(120 * Math.random()),
            leftBase: 220 + Math.floor(50 * Math.random()),
            maxDistance: 10,
        });

        const wLeft  = wiggle({
            input: chLeft,
            topBase: 0 + Math.floor(90 * Math.random()),
            leftBase: 0 + Math.floor(90 * Math.random()),
            maxDistance: 10,
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

        function initCloakImage(filePath?: string, type?: CloakImageTypes) {
            let flightImage = sharp(filePath || 'public/ready.jpg').extract(cropInfoBlack).resize(size, size);
            if (type === CloakImageTypes.BlackAndWhite) {
                flightImage.threshold(100);
            }
            if (type === CloakImageTypes.GreyScale) {
                flightImage.grayscale();
            }
            if (type === CloakImageTypes.Blur) {
                flightImage.blur(10);
            }
            const flightSize = 50 + Math.round(Math.random() * 130);
            const velocity = Math.random() > .5 ? 200 + Math.random() * 60: -(200 + Math.random() * 60);
            const flightCrop = {
                top: Math.round(Math.random() * (size - flightSize)),
                left: Math.round(Math.random() * (size - flightSize)),
                width: flightSize,
                height: flightSize,
                dx: Math.random() * velocity,
                dy: Math.random() * velocity,
            };


            return async () => {
                const {top, left, width, height} = flightCrop;

                while (top + flightCrop.dy + width > size || top + flightCrop.dy < 0) {
                    console.log('dy changed')
                    flightCrop.dy = -1 * flightCrop.dy * (Math.random() * 0.6 + 0.7);
                }

                while (left + flightCrop.dx + width > size || left + flightCrop.dx < 0) {
                    console.log('dx changed')
                    flightCrop.dx = -1 * flightCrop.dx * (Math.random() * 0.6 + 0.7);
                }

                const flTop = Math.floor(flightCrop.top += flightCrop.dy);
                const flLeft = Math.floor(flightCrop.left += flightCrop.dx);


                const flCropped = flightImage.extract({
                    top: flTop,
                    left: flLeft,
                    width,
                    height,
                });


                return {
                    input: await flCropped.toBuffer(),
                    top: flTop,
                    left: flLeft,
                };
            }
        }

        const major = initCloakImage(imgPathBlack);
        const major2 = initCloakImage(imgPathBlack);
        const major3 = initCloakImage(imgPathBlack);
        const major4 = initCloakImage(imgPathBlack);
        const major5 = initCloakImage(imgPathBlack);
        const major6 = initCloakImage(imgPathBlack);
        const blur = initCloakImage(imgPathBlack, CloakImageTypes.Blur);
        const blur2 = initCloakImage(imgPathBlack, CloakImageTypes.Blur);
        const blur3 = initCloakImage(imgPathBlack, CloakImageTypes.Blur);
        const blur4 = initCloakImage(imgPathBlack, CloakImageTypes.Blur);
        const blur5 = initCloakImage(imgPathBlack, CloakImageTypes.Blur);
        const blur6 = initCloakImage(imgPathBlack, CloakImageTypes.Blur);
        const blur7 = initCloakImage(imgPathBlack, CloakImageTypes.Blur);
        const greyscale = initCloakImage(imgPathBlack, CloakImageTypes.GreyScale);
        const greyscale2 = initCloakImage(imgPathBlack, CloakImageTypes.GreyScale);
        const greyscale3 = initCloakImage(imgPathBlack, CloakImageTypes.GreyScale);
        const greyscale4 = initCloakImage(imgPathBlack, CloakImageTypes.GreyScale);
        const greyscale5 = initCloakImage(imgPathBlack, CloakImageTypes.GreyScale);
        const greyscale6 = initCloakImage(imgPathBlack, CloakImageTypes.GreyScale);
        const greyscale7 = initCloakImage(imgPathBlack, CloakImageTypes.GreyScale);
        const greyscale8 = initCloakImage(imgPathBlack, CloakImageTypes.GreyScale);
        const blackAndWhite = initCloakImage(imgPathBlack, CloakImageTypes.BlackAndWhite);

        for (let i = 0; i < 350; i++) {
            if (i % 20 === 0) {
                console.log({i});
            }
            
            const flCroppedMajor = await major();
            const flCroppedMajor2 = await major2();
            const flCroppedMajor3 = await major3();
            const flCroppedMajor4 = await major4();
            const flCroppedMajor5 = await major5();
            const flCroppedMajor6 = await major6();
            const flCroppedBlur = await blur();
            const flCroppedBlur2 = await blur2();
            const flCroppedBlur3 = await blur3();
            const flCroppedBlur4 = await blur4();
            const flCroppedBlur5 = await blur5();
            const flCroppedBlur6 = await blur6();
            const flCroppedBlur7 = await blur7();
            const flCroppedGreyScale = await greyscale();
            const flCroppedGreyScale2 = await greyscale2();
            const flCroppedGreyScale3 = await greyscale3();
            const flCroppedGreyScale4 = await greyscale4();
            const flCroppedGreyScale5 = await greyscale5();
            const flCroppedGreyScale6 = await greyscale6();
            const flCroppedGreyScale7 = await greyscale7();
            const flCroppedGreyScale8 = await greyscale8();
            const flCroppedBlackAndWhite = await blackAndWhite();

            await dogImageResized
                .composite([
                    flCroppedMajor,
                    flCroppedMajor2,
                    flCroppedMajor3,
                    flCroppedMajor4,
                    flCroppedMajor5,
                    flCroppedMajor6,
                    flCroppedBlackAndWhite,
                    flCroppedGreyScale,
                    flCroppedGreyScale2,
                    flCroppedGreyScale3,
                    flCroppedGreyScale4,
                    flCroppedGreyScale5,
                    flCroppedGreyScale6,
                    flCroppedGreyScale7,
                    flCroppedGreyScale8,
                    flCroppedBlur,
                    flCroppedBlur2,
                    flCroppedBlur3,
                    flCroppedBlur4,
                    flCroppedBlur5,
                    flCroppedBlur6,
                    flCroppedBlur7,
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
