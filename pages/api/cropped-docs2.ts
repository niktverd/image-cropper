import type { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
import sharp from 'sharp';
import { File, IncomingForm } from 'formidable';
import options from '../../position-options.json';

export const config = {
    api: {
        bodyParser: false
    }
};

const isFile = (file: File | File[]): file is File => {
    return (file as File).filepath !== undefined;
}

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

        const DriverLisenceNumber = userInfo.dl as string;
        const DriverLisence = `
            <svg
                width="500"
                height="160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <style>
                    .title {fill:rgba(177, 24, 25, 0.85); font-size: ${options.dlSize}; font-family: Myriad Pro; font-weight: bold;
                </style>
                <text x="0%" y="50%" text-anchor="left" class="title">${DriverLisenceNumber}</text>
            </svg>
        `;

        const ExpText = userInfo.exp as string;
        //177, 24, 25, 0.85
        const Exp = `
            <svg width="${500}" height="${160}">
            <style>
                .title {fill: rgba(177, 24, 25, 0.85); font-size: ${options.exSize}; font-family: Myriad Pro; font-weight: bold;}
            </style>
            <text x="0%" y="50%" text-anchor="left" class="title">${ExpText.trim()}</text>
            </svg>
        `;

        // const LastNameText = 'KREIGER';
        const LastNameText = userInfo.ln as string;
        const LastName = `
            <svg width="${500}" height="${600}">
            <style>
                .title {fill: rgba(0, 0, 0, 0.85); font-size: ${options.lnSize}; font-family: Myriad Pro; font-weight: bold;}
            </style>
            <text x="0%" y="50%" text-anchor="left" class="title">${LastNameText.trim()}</text>
            </svg>
        `;

        const FirstNameText = userInfo.fn as string;
        const FirstName = `
            <svg width="${500}" height="${600}">
            <style>
                .title {fill: rgba(0, 0, 0, 0.85); font-size: ${options.fnSize}; font-family: Myriad Pro; font-weight: bold;}
            </style>
            <text x="0%" y="50%" text-anchor="left" class="title">${FirstNameText.trim()}</text>
            </svg>
        `;
        const DriverLisenceBuffer = Buffer.from(DriverLisence);
        const ExpBuffer = Buffer.from(Exp);
        const LastNameBuffer = Buffer.from(LastName);
        const FirstNameBuffer = Buffer.from(FirstName);
        
        // const ready = await sharp('public/ready.jpg').resize(1410, 888);
        const template = await sharp('public/template.png').resize(1410, 888);
        const templateBuf = await template.toBuffer();
        const dogImageCropped = dogImage.extract(cropInfo);
        return await template
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
                // {
                //     input: await ready.toBuffer(),
                //     top: 0,
                //     left: 0,
                // },
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
