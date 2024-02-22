import express, {Express,Request,Response} from 'express';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from 'cors';
import routes from './Routes/topics'
import questionRoutes from './Routes/questionRoutes'
import userRoutes from './Routes/userRoutes';
import optionRoutes from './Routes/optionRoutes';
import testRoutes from './Routes/testRoutes';

const app=express();
const allowedOrigin=['http://3.109.217.173:8000/','http://172.31.37.40:8000/']
const corsOption = {
  origin: allowedOrigin,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));
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
          url: 'http://3.109.217.173:5000/api',
        },
      ],
    },
    apis: ['./src/Routes/topics.ts'],
  };
  
  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  console.log(swaggerDocs);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/t',routes);
app.use("/api",questionRoutes);
app.use("/api",userRoutes);
app.use("/api",optionRoutes);
app.use("/api",testRoutes);
app.use('/',(req,res)=>{
  res.send("node server api is hitting")
});

let port = 5000;

app.listen(port,()=>{
    console.log("listening at port:5000");
})


