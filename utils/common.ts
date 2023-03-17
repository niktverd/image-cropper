import { File } from "formidable";
import { NextApiRequest } from "next";
import { Variants } from "../src/components/CropControls/CropControls";

export const isFile = (file: File | File[]): file is File => {
    return (file as File).filepath !== undefined;
};

export const prepareParams = (req: NextApiRequest) => {
    console.log(req.query);
    const variant = (req.query.variant as Variants) ?? Variants.SimplifiedLite;
    const rotation = parseFloat((req.query.rotation as string) ?? "0");
    const amplitude = parseFloat((req.query.amplitude as string) ?? "10");
    const duration = parseFloat((req.query.duration as string) ?? "100");
    const ratio = parseFloat((req.query.ratio as string) ?? "1");
    const width = parseFloat((req.query.outWidth as string) ?? "0");
    const height = parseFloat((req.query.outHeight as string) ?? "0");
    const cropInfo = {
        left: parseFloat((req.query.x as string) ?? "0"),
        top: parseFloat((req.query.y as string) ?? "0"),
        width: parseFloat((req.query.width as string) ?? "100"),
        height: parseFloat((req.query.height as string) ?? "100"),
    };
    const cropInfoBlack = {
        left: parseFloat((req.query.xBlack as string) ?? "0"),
        top: parseFloat((req.query.yBlack as string) ?? "0"),
        width: parseFloat((req.query.widthBlack as string) ?? "100"),
        height: parseFloat((req.query.heightBlack as string) ?? "100"),
    };

    return {
        rotation,
        amplitude,
        duration,
        cropInfo,
        cropInfoBlack,
        variant,
        ratio,
        width,
        height,
    };
};
