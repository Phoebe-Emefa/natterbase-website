import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import Cors from 'cors';


export const upload = multer({ dest: 'uploads/' });

export const cors = Cors({
methods: ["GET", "POST", "HEAD", "PUT", "DELETE"],
});


 export const withMiddleware =  (handler: (req: NextApiRequest, res: NextApiResponse) => void) =>  async (req: NextApiRequest, res: NextApiResponse) => {
    await new Promise<void>((resolve, reject) => {
      upload.single('documents')(
        // @ts-ignore
        req, res, (err: any) => {
        if (err) {
          reject(err);
        } else {

          resolve();
        }
      });
    });

    await cors(req, res, ()=> {

    });
  
    handler(req, res);
  };

