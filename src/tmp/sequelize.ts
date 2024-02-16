import express from 'express';
import { Sequelize } from 'sequelize';
const app=express();
import cors from 'cors';
import sql from 'mssql';
import {config} from '../Connection/config';
const Options = require('../models/optionModel.ts');
import sequelize from '../Connection/sequelizeConnection.ts';

app.use(cors());

  async function test(){

    // const sequelize = new Sequelize('testdb', 'root', 'root', {
    //     host: 'localhost',
    //     dialect:'mssql'
    //   });
    try {
        await  sequelize.authenticate();
        
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  test();
//   option()
//   async function option(){
//     const user=await Options.findOne({
//         where:{
//             QuestionId:53,
//             CorrectOption:3
//         }
//     });
//     console.log("user:",user);
// }