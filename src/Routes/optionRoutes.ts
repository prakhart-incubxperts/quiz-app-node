import express, { Router, Request, Response } from 'express';
const app=express();
const routes:Router= express.Router();
import cors from 'cors';
import optionController from '../Controller/optionController';
app.use(cors());


routes.get('/options/qid', async (req: Request, res: Response) => {
    try {
        const ops= await optionController.getOptionByQuestionIdController(req.query.tid);
        res.send(ops);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.get('/option/qid', async (req: Request, res: Response) => {
    try {
        const ops= await optionController.getSpecificOptionByQuestionIdController(req.query.tid);
        res.send(ops);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.get('/option/correct', async (req: Request, res: Response) => {
    try {
        const ops= await optionController.getCorrectOptionController(Number(req?.query.id),Number(req?.query.value));
        res.send(ops);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

routes.post('/options/add', async (req: Request, res: Response) => {
    try {
      const response = await optionController.saveOptionsDataController(req.body);
      res.send({msg:"Question added successfully"});
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.put('/option/edit', async (req: Request, res: Response) => {
    try {
      const response = await optionController.editOptionsController(req.body);
      res.send({msg:"Option edited successfully"});
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  export default routes;