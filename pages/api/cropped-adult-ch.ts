import type { NextApiRequest, NextApiResponse } from "next";
import sharp from 'sharp';
import { IncomingForm } from 'formidable';
import { getChineeseText, getSvgByVariant } from "../../utils/svg";
import { isFile, prepareParams } from "../../utils/common";
import { Variants } from "../../src/components/CropControls/CropControls";

export const config = {
    api: {
        bodyParser: false
    }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const form = new IncomingForm();
    form.parse(req, async function (_err, _fields, files) {
        if (isFile(files.file)) {
            const imgBuffer = await crop(files?.file?.filepath);
            res.setHeader('Content-Type', 'image/png');
            return res.status(200).send(imgBuffer);
        }

        return res.status(400).send("");
    });

    const {rotation, cropInfo, variant} = prepareParams(req); 
    
    async function crop(imgPath: string) {
        const dogImage = sharp(imgPath);
        dogImage.metadata();
        await dogImage.metadata().then((metadata) => {
            console.log(`Source image size is ${metadata.width}x${metadata.height}`);
        });
        console.log(`Rotating... ${rotation} degrees`);
        await dogImage.rotate(rotation);

        const meta = await sharp(await dogImage.toBuffer()).metadata();

        console.log(`Rotated image size is ${meta.width}x${meta.height}`);
        console.log(`Cropping...`, cropInfo);
        console.log({variant});
        const svgs = getSvgByVariant(variant);
        
        console.log('got here - 3');
        const dogImageCropped = dogImage.extract(cropInfo);
        console.log('got here - 4', cropInfo);
        const dogImageResized = dogImageCropped.resize(994, 994);
        const composition = variant !== Variants.None ?
        [
            {
                input: getChineeseText(svgs.top),
                top: 0 + Math.floor(90 * Math.random()),
                left: 110 + Math.floor(90 * Math.random()),
            },
            {
                input: getChineeseText(svgs.bottom, 1.1),
                top: 700 + Math.floor(90 * Math.random()),
                left: 150 + Math.floor(50 * Math.random()),
            },
            {
                input: getChineeseText(svgs.center),
                top: 450 + Math.floor(120 * Math.random()),
                left: 250 + Math.floor(50 * Math.random()),
            },
            {
                input: getChineeseText(svgs.left),
                top: 0 + Math.floor(90 * Math.random()),
                left: 0 + Math.floor(90 * Math.random()),
            },
        ]
        : [];

        return await dogImageResized
            .composite(composition)
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
