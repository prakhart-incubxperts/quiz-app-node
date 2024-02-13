import express, { Router, Request, Response } from 'express';
const app=express();
const routes: Router = express.Router();
import cors from 'cors';
import testController from '../Controller/testController.ts'
//@ts-ignore
import anyDigitId from 'any-digit-id';
app.use(cors());

routes.get('/test/rank', async (req: Request, res: Response) => {
  try {
    const ques = await testController.getTestRankController(req.query.tid);
    res.send(ques);
  } catch (error) {
    console.log("err from route:", error);
    res.status(500).send('Internal Server Error');
  }
});

routes.post('/test/add', async (req: Request, res: Response) => {
    const id = anyDigitId({digit:5, type: 'numbers'});
    try {
      let data=req.body.params;
        for(let i=0;i<data?.length;i++){
          const response = await testController.saveTestDataController(data[i],id);
        }
        res.send({msg:"Test added successfully"});
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.get('/test/attempt', async (req: Request, res: Response) => {
    try {
      const ques = await testController.getTestAttemptController(req.query.tid);
      res.send(ques);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  export default routes;

