import type { NextApiRequest, NextApiResponse } from "next";
// import sharp from 'sharp';
import path from "path";
import getConfig from "next/config";
import sharp from 'sharp';
// import formidable from "formidable";
import { File, IncomingForm } from 'formidable'

export const config = {
    api: {
        bodyParser: false
    }
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

        const svgText = '1 2 3 4 5 6 7 8 9 0';
        const svg1 = `
            <svg
                width="450"
                height="60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <style>
                    .title {fill:rgba(177, 24, 25, 0.85); font-size: 32px; font-family: Myriad; font-weight: bold;
                </style>
                <text x="0%" y="50%" text-anchor="left" class="title">${svgText}</text>
            </svg>
        `;
        
        const svg2 = `
            <svg
                width="450"
                height="60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <style>
                    .title {fill:rgba(177, 24, 25, 0.85); font-size: 32px; font-family: Myriad Pro; font-weight: bold;
                </style>
                <text x="0%" y="50%" text-anchor="left" class="title">${svgText}</text>
            </svg>
        `;
        
        const svg3 = `
            <svg
                width="450"
                height="60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <style>
                    .title {fill:rgba(177, 24, 25, 0.85); font-size: 32px; font-family: MyriadPro; font-weight: bold;
                </style>
                <text x="0%" y="50%" text-anchor="left" class="title">${svgText}</text>
            </svg>
        `;
        
        const svg4 = `
            <svg
                width="450"
                height="60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <style>
                    .title {fill:rgba(177, 24, 25, 0.85); font-size: 32px; font-family: Times New Roman; font-weight: bold;
                </style>
                <text x="0%" y="50%" text-anchor="left" class="title">${svgText}</text>
            </svg>
        `;

        const svgBuffer1 = Buffer.from(svg1);
        const svgBuffer2 = Buffer.from(svg2);
        const svgBuffer3 = Buffer.from(svg3);
        const svgBuffer4 = Buffer.from(svg4);
        
        const ready = await sharp('public/ready.jpg').resize(705, 444);
        console.log('ready', await ready.resize(705, 444).metadata());
        const dogImageCropped = dogImage.extract(cropInfo);
        // return await dogImage
        //     .extract(cropInfo)
        return await dogImage
            .resize(600, 600)
            .composite([
                {
                    input: svgBuffer1,
                    top: 30,
                    left: 10,
                },
                {
                    input: svgBuffer2,
                    top: 200,
                    left: 10,
                },
                {
                    input: svgBuffer3,
                    top: 400,
                    left: 10,
                },
                {
                    input: svgBuffer4,
                    top: 500,
                    left: 10,
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
