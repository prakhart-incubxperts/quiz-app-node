"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const express = require('express')
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
// const cors = require("cors");
const topics_1 = __importDefault(require("../src/Routes/topics"));
//import {} from '../src/Routes/routes';
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.use('/',(req,res)=>{
//  //   res.send("/working")
// });
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
    apis: ['./src/Routes'],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
console.log(swaggerDocs);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.use("/topics", topics_1.default);
let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("listening at port:5000");
});
