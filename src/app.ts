import express, {Express,Request,Response} from 'express';
//const express = require('express')
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const app=express();
import cors from 'cors';
// const cors = require("cors");
import routes from './Routes/topics.ts'
import questionRoutes from './Routes/questionRoutes.ts'
import userRoutes from './Routes/userRoutes.ts';
import optionRoutes from './Routes/optionRoutes.ts';
import testRoutes from './Routes/testRoutes.ts';
//import {} from '../src/Routes/routes';
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'My API',
        version: '1.0.0',
        description: 'A sample API for learning Swagger',
      },
      servers: [
        {
          url: 'http://localhost:5000',
        },
      ],
    },
    apis: ['./src/Routes/topics.ts'],
  };
  
  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  console.log(swaggerDocs);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api",routes);
app.use("/api",questionRoutes);
app.use("/api",userRoutes);
app.use("/api",optionRoutes);
app.use("/api",testRoutes);
let port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("listening at port:5000");
})


