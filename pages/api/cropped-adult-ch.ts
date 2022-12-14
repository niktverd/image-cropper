import type { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";
import { IncomingForm } from "formidable";
import { getChineeseText, getSvgByVariant } from "../../utils/svg";
import { isFile, prepareParams } from "../../utils/common";
import { Variants } from "../../src/components/CropControls/CropControls";

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

    const { rotation, cropInfo, variant, ratio } = prepareParams(req);

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
        console.log({ variant });

        const svgs = getSvgByVariant(variant);

        console.log("got here - 3");
        const dogImageCropped = dogImage.extract(cropInfo);
        console.log("got here - 4", cropInfo);
        const totalWidth = Math.round(ratio >= 1 ? 1000 : 1000  * ratio);
        const totalHeight = Math.round(ratio <= 1 ? 1000 : 1000 / ratio);

        console.log({ratio, totalWidth, totalHeight});
        const dogImageResized = dogImageCropped.resize(totalWidth, totalHeight);
        const topEnt = getChineeseText(svgs.top, {
            maxWidth: Math.floor(totalWidth * 0.8),
            maxHeight: Math.floor(totalHeight * 0.3),
        });

        const bottomEnt = getChineeseText(svgs.bottom, {
            maxWidth: Math.floor(totalWidth * 0.8),
            maxHeight: Math.floor(totalHeight * 0.3),
        });
        const centerEnt = getChineeseText(svgs.center, {
            maxWidth: Math.floor(totalWidth * 0.45),
            maxHeight: Math.floor(totalHeight * 0.45),
        });
        const leftEnt = getChineeseText(svgs.left, {
            maxWidth: Math.floor(totalWidth * 0.3),
            maxHeight: Math.floor(totalHeight * 0.9),
        });

        const composition =
            variant !== Variants.None
                ? [
                      {
                          input: topEnt.image,
                          top: 0 + Math.floor(Math.random() * (topEnt.maxHeight - topEnt.calculatedHeight)),
                          left: 200 + Math.floor(Math.random() * (topEnt.maxWidth - topEnt.calculatedWidth)),
                      },
                      {
                          input: bottomEnt.image,
                          top: totalHeight - bottomEnt.maxHeight + Math.floor(Math.random() * (bottomEnt.maxHeight - bottomEnt.calculatedHeight)),
                          left: totalWidth - bottomEnt.maxWidth + Math.floor(Math.random() * (bottomEnt.maxWidth - bottomEnt.calculatedWidth)),
                      },
                      {
                          input: centerEnt.image,
                          top: Math.floor(topEnt.maxHeight + Math.random() * (centerEnt.maxHeight - centerEnt.calculatedHeight)),
                          left: 200 + Math.floor(Math.random() * (centerEnt.maxWidth - centerEnt.calculatedWidth)),
                      },
                      {
                          input: leftEnt.image,
                          top: 0 + Math.floor(Math.random() * (leftEnt.maxHeight - leftEnt.calculatedHeight)),
                          left: 0 + Math.floor(Math.random() * (leftEnt.maxWidth - leftEnt.calculatedWidth)),
                      },
                  ]
                : [];

        return await dogImageResized.composite(composition).png().toBuffer();
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
