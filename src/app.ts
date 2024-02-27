import express, {Express,Request,Response} from 'express';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors, { CorsOptions } from 'cors';
import routes from './Routes/topics'
import questionRoutes from './Routes/questionRoutes'
import userRoutes from './Routes/userRoutes';
import optionRoutes from './Routes/optionRoutes';
import testRoutes from './Routes/testRoutes';

const app=express();
const allowedOrigin=['http://13.232.154.99:8000/api','http://172.31.37.40:8000/api','*','null']
export const corsOptions: CorsOptions = {
  origin: allowedOrigin,
  credentials: true,
  allowedHeaders:['Access-Control-Allow-Origin:*','Access-Control-Allow-Headers:Content-Type','Access-Control-Allow-Methods: GET, POST, PUT, DELETE'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

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
          url: 'http://13.232.154.99:5000/api',
        },
      ],
    },
    apis: ['./src/Routes/topics.ts'],
  };
  
  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  console.log(swaggerDocs);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api',routes);
app.use("/api",questionRoutes);
app.use("/api",userRoutes);
app.use("/api",optionRoutes);
app.use("/api",testRoutes);
app.use('/',(req,res)=>{
  res.send("node server api is hitting")
});

const port = 5000;

app.listen(port,()=>{
    console.log("listening at port:5000");
})


