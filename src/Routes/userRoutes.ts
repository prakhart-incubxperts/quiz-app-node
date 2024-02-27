import express, { Router, Request, Response } from 'express';
const app=express();
const routes:Router = express.Router();
import cors from 'cors';
import UserController from '../Controller/userController'
app.use(cors());

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


routes.get('/users',cors(), async (req: Request, res: Response) => {
    try {
      const users = await UserController.getUserDataController(req.query);
      res.send(users);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.get('/users/get',cors(), async (req: Request, res: Response) => {
    try {
      const users = await UserController.getUserByEmailDataController(req.query.email);
      res.send(users);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  
  export default routes;