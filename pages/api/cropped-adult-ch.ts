import type { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
import sharp from 'sharp';
import { File, IncomingForm } from 'formidable';
import options from '../../position-options.json';
import getDriverLiseceSvg from "../../utils/svg/dl";
import getExpirationSvg from "../../utils/svg/exp";
import getLastNameSvg from "../../utils/svg/ln";
import getFirstNameSvg from "../../utils/svg/fn";
import getChAdultBottomSvg from "../../utils/svg/chineese-adult/chineese-bottom-ink";

import {genColors} from '../../utils/genColors';
import getChAdultTopSvg from "../../utils/svg/chineese-adult/chineese-top-ink";
import getChAdultCenterSvg from "../../utils/svg/chineese-adult/chineese-center-ink";
import getChAdultLeftSvg from "../../utils/svg/chineese-adult/chineese-left-ink";

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

        // if (height !== undefined && width !== undefined) {
        //     cropInfo.top = Math.round((cropInfo.top / 100) * height);
        //     cropInfo.left = Math.round((cropInfo.left / 100) * width);
        //     cropInfo.width = Math.round((cropInfo.width / 100) * width);
        //     cropInfo.height = Math.round((cropInfo.height / 100) * height);
        // }
        const getChineeseText = (getterForSvg) => {
            const bottomColor = genColors();
            const resizeBottom = 0.85 + 0.1 * Math.random();
            const chLeft = getterForSvg({...bottomColor, resize: resizeBottom});
            console.log(chLeft);
            return Buffer.from(chLeft);
        }
        const chBottom = getChineeseText(getChAdultBottomSvg);
        const chTop = getChineeseText(getChAdultTopSvg);
        const chCenter = getChineeseText(getChAdultCenterSvg);
        const chLeft = getChineeseText(getChAdultLeftSvg);
        // const ExpBuffer = Buffer.from(Exp);
        // const LastNameBuffer = Buffer.from(LastName);
        // const FirstNameBuffer = Buffer.from(FirstName);
        
        // const ready = await sharp('public/ready.jpg').resize(1410, 888);

        // console.log('got here - 1');
        // const template = await sharp('public/template.png').resize(1410, 888);
        // console.log('got here - 2');
        // const templateBuf = await template.toBuffer();
        console.log('got here - 3');
        const dogImageCropped = dogImage.extract(cropInfo);
        console.log('got here - 4', cropInfo);
        const dogImageResized = dogImageCropped.resize(994, 994);



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
