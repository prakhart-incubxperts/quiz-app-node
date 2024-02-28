import express, { Router, Request, Response } from 'express';
const app=express();
const routes:Router= express.Router();
import cors from 'cors';
// import loginController from '../Controller/loginController';
import { corsOptions } from 'app';
app.use(cors());

// routes.post('/topics/add',cors(corsOptions), async (req: Request, res: Response) => {
//     try {
//       const response = await loginController.saveTopicDataController(req.body);
//       res.send({msg:"Topic added successfully"});
//     } catch (error) {
//       console.log("err from route:", error);
//       res.status(500).send('Internal Server Error');
//     }
//   });

   
   export default routes;