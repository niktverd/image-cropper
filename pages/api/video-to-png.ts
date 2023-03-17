import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from 'formidable';
import { copyFileSync, existsSync, mkdirSync, readdirSync, unlinkSync } from "fs";

import pathToFfmpeg from 'ffmpeg-static';

import util from 'util';
import {exec as _exec} from 'child_process';
import { isFile } from "../../utils/common";

const exec = util.promisify(_exec);

export const config = {
    api: {
        bodyParser: false
    }
};

const outFolder = './out';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const form = new IncomingForm();
    form.parse(req, async function (_err, _fields, files) {
        if (isFile(files.file)) {
            console.log({filepath: files?.file});
            const imgBuffer = await crop(files?.file?.filepath, files.file);
            res.setHeader('Content-Type', 'image/png');
            return res.status(200).send(imgBuffer);
        }
        return res.status(400).send("");
    });

    async function crop(filePath: string, fileInfo: any) {

        if(!existsSync(outFolder)) {
            mkdirSync(outFolder);
        }

        if(!existsSync(`${outFolder}/video-to-png`)) {
            mkdirSync(`${outFolder}/video-to-png`);
        }

        if(!existsSync(`${outFolder}/sourceVideo`)) {
            mkdirSync(`${outFolder}/sourceVideo`);
        }

        const files = readdirSync(`${outFolder}/video-to-png`);

        for (const f of files) {
            unlinkSync(`${outFolder}/video-to-png/${f}`);
        }

        const sourceVideos = readdirSync(`${outFolder}/sourceVideo`);

        for (const f of sourceVideos) {
            unlinkSync(`${outFolder}/sourceVideo/${f}`);
        }

        const {newFilename, mimetype} = fileInfo;

        const mt = mimetype.split('/');

        if (mt[0] !== 'video') {
            return null;
        }

        const fileName = `${outFolder}/sourceVideo/${newFilename}.${mt[1]}`;

        copyFileSync(filePath, fileName);
        
        await exec(`"${pathToFfmpeg}" -i ${fileName} -vf fps=3 ${outFolder}/video-to-png/fileName%03d.png`);
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
