import express, { Router, Request, Response, NextFunction } from 'express';
const app=express();
const routes:Router = express.Router();
import cors from 'cors';
import UserController from '../Controller/userController';
const jwt =require('jsonwebtoken');
const secretKey='secretKey';
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

  routes.post('/users/login',cors(), async (req: Request, res: Response) => {
    try {
      console.log("req.body:",req?.body.data);
      const users = await UserController.getUserController(req?.body.data);
      jwt.sign((req?.query),secretKey,{expiresIn:'300s'},(err:Error,token:any)=>{
        res.json({
          token,users
        })
      })
      // res.send(users);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  routes.post('/users/account',verifyToken,cors(), async (req: Request, res: Response) => {
    try {
      console.log("req.body:",req?.body);
      jwt.verify(req?.body,secretKey,(err:any,authData:any)=>{
        if(err){
          res.send({result:"invalid token"})
        }
        else{
          res.json({
            message:"profile accessed",
            authData
          })
        }
      })
      // const users = await UserController.getUserController(req?.body);
      // res.send(users);
    } catch (error) {
      console.log("err from route:", error);
      res.status(500).send('Internal Server Error');
    }
  });

  function verifyToken(req:Request,res:Response,next:any){
    const bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader!== 'undefined'){
      const bearer=bearerHeader.split(" ");
      const token=bearer[1];
      req.body=token
      next();
    }
    else{
      res.send({result:'Token is invalid'})
    }
  }

  
  export default routes;