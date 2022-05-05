import type { NextApiRequest, NextApiResponse } from "next";
import sharp from 'sharp';
import { File, IncomingForm } from 'formidable'
import path from 'path';
import {readdirSync } from "fs";

export const config = {
    api: {
        bodyParser: false
    }
};

const BASE_FOLDER = 'images';

const isFile = (file: File | File[]): file is File => {
    return (file as File).filepath !== undefined;
}



const handlerLoad = async (req: NextApiRequest, res: NextApiResponse) => {

    const {imagePath} = req.query;
    console.log(imagePath);

    if (!imagePath) {
        return res.status(504).send('imagePath was not send');
    }

    const loaded = await sharp(imagePath as string);


    const imgBuffer = await loaded.toBuffer();
    console.log('imgBuffer');
    res.setHeader('Content-Type', 'image/png');
    return res.status(200).send(imgBuffer);

};

const crop = (req: NextApiRequest, res: NextApiResponse) => {
    req.method === "GET"
    ? handlerLoad(req, res)
      : req.method === "POST"
      ? console.log("POST")
      : req.method === "PUT"
      ? console.log("PUT")
      : req.method === "DELETE"
      ? console.log("DELETE")
      : res.status(404).send("");
  };

  export default crop;
