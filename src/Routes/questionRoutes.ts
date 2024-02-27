import express, { Router, Request, Response } from 'express';
const app=express();
const routes:Router = express.Router();
import cors from 'cors';
import questionController from '../Controller/questionController';
app.use(cors());

routes.get('/question',cors(), async (req: Request, res: Response) => {
    try {
      const ques = await questionController.getQuestionDataByDescriptionController(req.query);
      res.send(ques);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.get('/questions',cors(), async (req: Request, res: Response) => {
    try {
      const ques = await questionController.getQuestionDataController(req.query.tid);
      res.send(ques);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.get('/questions/tid',cors(), async (req: Request, res: Response) => {
    try {
      const ques = await questionController.getAllQuestionByTopicIdController(req.query.tid);
      res.send(ques);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.get('/question/qid',cors(), async (req: Request, res: Response) => {
    try {
      const ques = await questionController.getQuestionByIdController(req.query.qid);
      res.send(ques);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.post('/questions/add',cors(), async (req: Request, res: Response) => {
    try {
      const response = await questionController.saveQuestionDataController(req.body);
      res.send({msg:"success",response});
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.put('/question/delete',cors(), async (req: Request, res: Response) => {
    try {
      const response = await questionController.deleteQuestionController(req.body.qid);
      res.send({msg:"Question added successfully"});
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.put('/question/edit',cors(), async (req: Request, res: Response) => {
    try {
      const response = await questionController.editQuestionController(req.body);
      res.send({msg:"Question added successfully"});
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  export default routes;