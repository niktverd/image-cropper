import type { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";
import { IncomingForm } from "formidable";
import { isFile, prepareParams } from "../../utils/common";

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const form = new IncomingForm();
    form.parse(req, async function (_err, _fields, files) {
        if (isFile(files.file)) {
            const imgBuffer = await crop(files?.file?.filepath);
            res.setHeader("Content-Type", "image/png");
            return res.status(200).send(imgBuffer);
        }

        return res.status(400).send("");
    });

    const { rotation, cropInfo, width, height } = prepareParams(req);

    async function crop(imgPath: string) {
        const dogImage = sharp(imgPath);
        dogImage.metadata();
        await dogImage.metadata().then((metadata) => {
            console.log(
                `Source image size is ${metadata.width}x${metadata.height}`
            );
        });
        console.log(`Rotating... ${rotation} degrees`);
        await dogImage.rotate(rotation);

        const meta = await sharp(await dogImage.toBuffer()).metadata();
        console.log(`Rotated image size is ${meta.width}x${meta.height}`);
        console.log(`Cropping...`, cropInfo);
        console.log({ width, height });


        console.log("got here - 3");
        const dogImageCropped = dogImage.extract(cropInfo);
        console.log("got here - 4", cropInfo);
        
        const dogImageCroppedMeta = await sharp(await dogImageCropped.toBuffer()).metadata();
        console.log(`Rotated image size is ${dogImageCroppedMeta.width}x${dogImageCroppedMeta.height}`);
        
        const dogImageResized = dogImageCropped.resize(width, height);

        const dogImageResizedMeta = await sharp(await dogImageResized.toBuffer()).metadata();
        console.log(`Rotated image size is ${dogImageResizedMeta.width}x${dogImageResizedMeta.height}`);
        
        return await dogImageResized.png().toBuffer();
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
