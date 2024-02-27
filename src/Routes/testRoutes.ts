import express, { Router, Request, Response } from 'express';
const app=express();
const routes:Router= express.Router();
import cors from 'cors';
import testController from '../Controller/testController'
//@ts-ignore
import anyDigitId from 'any-digit-id';
//app.use(cors());

routes.get('/test/rank',cors(), async (req: Request, res: Response) => {
  try {
    const ques = await testController.getTestRankController(req.query.tid);
    res.send(ques);
  } catch (error) {
    console.log("err from route:", error);
    res.status(500).send('Internal Server Error');
  }
});

routes.post('/test/add',cors(), async (req: Request, res: Response) => {
    console.log("test data:",req.body.params);
    
    const id = anyDigitId({digit:5, type: 'numbers'});
    try {
      const data=req.body.params;
        for(let i=0;i<data?.length;i++){
          const response = await testController.saveTestDataController(data[i],id);
        }
        res.send({msg:"Test added successfully"});
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.get('/test/attempt',cors(), async (req: Request, res: Response) => {
    try {
      console.log("req from /test/attempt",req?.query);
      
      if(Number(req?.query.tid)>1){
        const arr:number[]=Object.values(Number(req?.query.tid)).map(value=>Number(value));
        const tests = await testController.getTestAttemptController(arr);
        console.log("tests:",tests);
        res.send(tests);
      }
      else{
        res.send({msg:"No data found in request body"})
      }  
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  export default routes;

