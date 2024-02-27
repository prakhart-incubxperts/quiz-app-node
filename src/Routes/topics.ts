import express, { Router, Request, Response } from 'express';
const app=express();
const routes:Router = express.Router();
// import cors from 'cors';
import Controller from '../Controller/controller'
import cors from 'cors';
// app.use(cors());

/**
 * @swagger
  * /topics:
 *    get:
 *     summary: Returns list of Topics.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             example:
 *               message: 'OK!'
 *          
 */
console.log("inside backend topics");


routes.get('/topics', cors(),async (req: Request, res: Response) => {
  console.log("inside get topic routes");
    try {
      console.log("inside get topics");
      const topic = await Controller.getTopicDataController();
      res.send(topic);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.get('/topics/get', async (req: Request, res: Response) => {
    try {
      const topic = await Controller.getTopicExistsController(String(req?.query.topic));
      res.send(topic);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.get('/topics/getname', async (req: Request, res: Response) => {
    try {
      const topic = await Controller.getTopicNameExistsController(req.query.topic,Number(req.query.topicId));
      res.send(topic);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.put('/topics/edit', async (req: Request, res: Response) => {
    try {
      console.log("re.query:",req.body.params);
      const topic = await Controller.editTopicNameController(req.body.params.topic,req.body.params.topicId);
      res.send(topic);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.post('/topics/add', async (req: Request, res: Response) => {
    try {
      const response = await Controller.saveTopicDataController(req.body);
      res.send({msg:"Topic added successfully"});
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  export default routes;

