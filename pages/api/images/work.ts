import type { NextApiRequest, NextApiResponse } from "next";
import sharp from 'sharp';
import { File } from 'formidable'
import path from 'path';
import {writeFileSync, mkdirSync, readdirSync, unlinkSync } from "fs";
import {shuffle} from 'lodash';
import fng from 'fakenamegenerator';

import options from '../../../position-options.json';

import getDriverLisenceSvg from "../../../utils/svg/dl";
import getExpirationSvg from "../../../utils/svg/exp";
import getLastNameSvg from "../../../utils/svg/ln";
import getFirstNameSvg from "../../../utils/svg/fn";
import generateDriverLicense from "../../../utils/generate-dl";
import generateExpiration from "../../../utils/generate-exp";

export const config = {
    api: {
        bodyParser: true,
    }
};

const BASE_FOLDER = 'images';

const OUTPUT_FOLDER = 'images_prepared';

const isFile = (file: File | File[]): file is File => {
    return (file as File).filepath !== undefined;
}

const handlerLoad = async (req: NextApiRequest, res: NextApiResponse) => {
    var imageFolder = path.resolve(BASE_FOLDER);

    const filesNames = readdirSync(imageFolder);

    const imagePath = shuffle(filesNames).find((imgPth: string) => 
        imgPth.includes('.png')
        || imgPth.includes('.jpg')
        || imgPth.includes('.jpeg')
        || imgPth.includes('.ts'));

    if (!imagePath) {
        return res.status(404).send('not found');
    }

    const fullPath = path.join(imageFolder, imagePath);

    return res.status(200).json({fullPath});
};

const handlerDelete = async (req: NextApiRequest, res: NextApiResponse) => {
    const {imagePath} = req.body;

    console.log(imagePath);

    try {
        unlinkSync(imagePath)
        //file removed
        return res.status(200).send('deleted');
      } catch(err) {
        console.error(err)
        return res.status(500).send(JSON.stringify(err));
      }
};

const handlerCrop = async (req: NextApiRequest, res: NextApiResponse) => {

    const {x, y, width, height, imagePath} = req.body;

    const cropInfo = {
        left: parseFloat((x as string) ?? "0"),
        top: parseFloat((y as string) ?? "0"),
        width: parseFloat((width as string) ?? "100"),
        height: parseFloat((height as string) ?? "100")
    };

    async function crop(imgPath: string) {
        const dogImage = sharp(imgPath);

        await dogImage.metadata().then((metadata) => {
            console.log(`cropInfo is ${cropInfo}`);
            console.log(`Source image size is ${metadata.width}x${metadata.height}`);
        });

        const meta = await sharp(await dogImage.toBuffer()).metadata();

        console.log(`Cropping...`, cropInfo);

        const metaHeight = meta.height;
        const metaWidth = meta.width;

        if (metaHeight !== undefined && metaWidth !== undefined) {
            cropInfo.top = Math.round((cropInfo.top / 100) * metaHeight);
            cropInfo.left = Math.round((cropInfo.left / 100) * metaWidth);
            cropInfo.width = Math.round((cropInfo.width / 100) * metaWidth);
            cropInfo.height = Math.round((cropInfo.height / 100) * metaHeight);
        }

        console.log("Extracting...", cropInfo);
       
        const newName = new Date().toISOString().slice(0, 19).replace(/[^0-9\\.]+/g, '');
        const newFolderPath = path.join(path.resolve(OUTPUT_FOLDER), newName);
        mkdirSync(newFolderPath);
        await dogImage.png().toFile(path.join(newFolderPath, 'original.png '));
        
        const dogImageCropped = await dogImage.extract(cropInfo);

        await dogImageCropped.png().toFile(path.join(newFolderPath, 'cropped.png '));

        const FNG = await fng(0, 'us', 23, 45,);
        const [fn, ln] = FNG.name.split(/ \w\. /);

        if (!fn || !ln ) {
            return res.status(500).send('name generation failed');
        }
        
        console.log(Math.random().toString(36).substr(2, 5));
        const userInfo = {
            dl: generateDriverLicense(),
            exp: generateExpiration(),
            ln: ln.toUpperCase(),
            fn: fn.toUpperCase(),
            dob: FNG.birthday,
        };

        const DriverLisence = getDriverLisenceSvg(userInfo.dl as string, options.dlSize);
        const Exp = getExpirationSvg(userInfo.exp as string, options.exSize)
        const LastName = getLastNameSvg(userInfo.ln as string, options.lnSize);
        const FirstName = getFirstNameSvg(userInfo.fn as string, options.fnSize);

        const DriverLisenceBuffer = Buffer.from(DriverLisence);
        const ExpBuffer = Buffer.from(Exp);
        const LastNameBuffer = Buffer.from(LastName);
        const FirstNameBuffer = Buffer.from(FirstName);

        const template = await sharp('public/template.png').resize(1410, 888);
        const templateBuf = await template.toBuffer();
        await template
            .composite([
                {
                    input: await dogImageCropped.resize(428, 564).toBuffer(),
                    top: 150,
                    left: 56,
                },
                {
                    input: await dogImageCropped.resize(188, 232).greyscale().toBuffer(),
                    top: 488,
                    left: 864,
                },
                {
                    input: templateBuf,
                    top: 0,
                    left: 0,
                },
                {
                    input: DriverLisenceBuffer,
                    top: options.dlPosTop,
                    left: options.dlPosLeft,
                },
                {
                    input: ExpBuffer,
                    top: options.exPosTop,
                    left: options.exPosLeft,
                },
                {
                    input: LastNameBuffer,
                    top: options.lnPosTop,
                    left: options.lnPosLeft,
                },
                {
                    input: FirstNameBuffer,
                    top: options.fnPosTop,
                    left: options.fnPosLeft,
                },
            ])
            .png()
            .toFile(path.join(newFolderPath, 'dl-draft.png'));

        
        writeFileSync(path.join(newFolderPath, 'data.json'), JSON.stringify(userInfo));

        return res.status(200).send('cropped');
    }


    crop(imagePath);

};

const crop = (req: NextApiRequest, res: NextApiResponse) => {
    req.method === "POST"
      ? handlerCrop(req, res)
      : req.method === "PUT"
      ? console.log("PUT")
      : req.method === "DELETE"
      ? handlerDelete(req, res)
      : req.method === "GET"
      ? handlerLoad(req, res)
      : res.status(404).send("");
  };

  export default crop;
