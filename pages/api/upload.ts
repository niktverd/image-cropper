import imgbbUploader from 'imgbb-uploader';
import { NextApiRequest, NextApiResponse } from 'next';

// const uploadUrl = 'https://api.imgbb.com/1/upload?expiration=5184000&key='

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    
    async function main(){
        const key = 'b8116bf89d5f237ea5ff2c733714aa8a';
        imgbbUploader(key, "public/template.png")
            .then((response) => console.log(response))
            .catch((error) => console.error(error));
    }

    main();
}

export default handler;
