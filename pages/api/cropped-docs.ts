import type { NextApiRequest, NextApiResponse } from "next";
// import sharp from 'sharp';
import path from "path";
import getConfig from "next/config";
import sharp from 'sharp';
// import formidable from "formidable";
import { File, IncomingForm } from 'formidable'

import font from '../../meriad-pro.json';

const { serverRuntimeConfig } = getConfig();

export const config = {
    api: {
        bodyParser: false
    }
};

const SIZES = {
    small: 200,
    medium: 400,
    large: 800
};

const isFile = (file: File | File[]): file is File => {
    return (file as File).filepath !== undefined;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // const form = new formidable.IncomingForm();
    const form = new IncomingForm();
    console.log('req.body', Object.keys(req) );
    console.log('req.headers', req.headers );
    console.log('req.method', req.method );
    console.log('req.statusMessage', req.statusMessage );
    let image = null;
    form.parse(req, async function (err, fields, files) {
        image = fields.file;
        console.log('files.fields', fields);
        console.log('files.err', err);
        // console.log('files.file', files.file);
        // if (typeof files?.file === File) {

        // }
        if (isFile(files.file)) {
            console.log('files.file.filepath', files?.file?.filepath);
            const imgBuffer = await crop(files?.file?.filepath);
            // console.log('imgBuffer', imgBuffer);
            res.setHeader('Content-Type', 'image/png');
            return res.status(200).send(imgBuffer);
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
    const userInfo = {
        dl: req.query.dl,
        exp: req.query.exp,
        ln: req.query.ln,
        fn: req.query.fn,
    };
    const options = JSON.parse(req.query.options as string);

    console.log('options:', options);

    // const dogPath = path.join(
    //     serverRuntimeConfig.PROJECT_ROOT,
    //     `./public/dog-${SIZES[size as string]}.jpeg`
    // );
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

        const height = meta.height;
        const width = meta.width;

        if (height !== undefined && width !== undefined) {
            cropInfo.top = Math.round((cropInfo.top / 100) * height);
            cropInfo.left = Math.round((cropInfo.left / 100) * width);
            cropInfo.width = Math.round((cropInfo.width / 100) * width);
            cropInfo.height = Math.round((cropInfo.height / 100) * height);
        }

        console.log("Extracting...", cropInfo);
        const text = "Sammy the Shark";
        // const docBg = `
        //     <svg width="${705}" height="${444}">
        //     </svg>
        // `;
        // .title {fill: #009f00; opacity: 0.85; font-size: 32px; font-family: Tangerine; font-weight: bold;}
        // 
        // <text x="50%" y="50%" text-anchor="middle" class="title">${DriverLisenceNumber.trim()}</text>

        // const DriverLisenceNumber = 'X3377976'
        // viewBox="0 0 250 60"

        const DriverLisenceNumber = userInfo.dl as string;
        const DriverLisence = `
            <svg
                width="250"
                height="60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <style>
                    .title {fill:rgba(177, 24, 25, 0.85); font-size: 32px; font-family: Myriad Pro; font-weight: bold;
                </style>
                <text x="0%" y="50%" text-anchor="left" class="title">${DriverLisenceNumber}</text>
            </svg>
        `;

        const ExpText = userInfo.exp as string;
        const Exp = `
            <svg width="${250}" height="${60}">
            <style>
                .title {fill: rgba(177, 24, 25, 0.85); font-size: 26px; font-family: Myriad Pro; font-weight: bold;}
            </style>
            <text x="0%" y="50%" text-anchor="left" class="title">${ExpText.trim()}</text>
            </svg>
        `;

        // const LastNameText = 'KREIGER';
        const LastNameText = userInfo.ln as string;
        const LastName = `
            <svg width="${250}" height="${60}">
            <style>
                .title {fill: rgba(0,0,0,0.85); font-size: 16px; font-family: Myriad Pro; font-weight: bold;}
            </style>
            <text x="0%" y="50%" text-anchor="left" class="title">${LastNameText.trim()}</text>
            </svg>
        `;

        // const FirstNameText = 'YASMIN';
        const FirstNameText = userInfo.fn as string;
        const FirstName = `
            <svg width="${250}" height="${60}">
            <style>
                .title {fill: rgba(0,0,0,0.85); font-size: 16px; font-family: Myriad Pro; font-weight: bold;}
            </style>
            <text x="0%" y="50%" text-anchor="left" class="title">${FirstNameText.trim()}</text>
            </svg>
        `;
        const DriverLisenceBuffer = Buffer.from(DriverLisence);
        const ExpBuffer = Buffer.from(Exp);
        const LastNameBuffer = Buffer.from(LastName);
        const FirstNameBuffer = Buffer.from(FirstName);
        
        const ready = await sharp('public/ready.jpg').resize(705, 444);
        console.log('ready', await ready.resize(705, 444).metadata());
        const template = await sharp('public/template.png').resize(705, 444);
        const templateBuf = await template.toBuffer();
        const dogImageCropped = dogImage.extract(cropInfo);
        // return await dogImage
        //     .extract(cropInfo)
        return await template
            .composite([
                {
                    input: await dogImageCropped.resize(214, 282).toBuffer(),
                    top: 75,
                    left: 28,
                },
                {
                    input: await dogImageCropped.resize(89, 116).greyscale().toBuffer(),
                    top: 244,
                    left: 432,
                },
                {
                    input: templateBuf,
                    top: 0,
                    left: 0,
                },
                // {
                //     input: await ready.toBuffer(),
                //     top: 0,
                //     left: 0,
                // },
                {
                    input: DriverLisenceBuffer,
                    top: 96,
                    left: 269,
                },
                {
                    input: ExpBuffer,
                    top: 132,
                    left: 283,
                },
                {
                    input: LastNameBuffer,
                    top: 160,
                    left: 275,
                },
                {
                    input: FirstNameBuffer,
                    top: 185,
                    left: 275,
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
