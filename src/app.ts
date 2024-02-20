import express, {Express,Request,Response} from 'express';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const app=express();
import cors from 'cors';
import routes from './Routes/topics'
import questionRoutes from './Routes/questionRoutes'
import userRoutes from './Routes/userRoutes';
import optionRoutes from './Routes/optionRoutes';
import testRoutes from './Routes/testRoutes';
const corsOption = {
  origin: ['http://43.205.240.85:8000/api'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors(corsOption));

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
let port = 5000;

app.listen(port,()=>{
    console.log("listening at port:5000");
})


