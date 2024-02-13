"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const routes = express_1.default.Router();
const cors_1 = __importDefault(require("cors"));
const controller_1 = __importDefault(require("Controller/controller"));
app.use((0, cors_1.default)());
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
routes.get('/topics', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req", req);
    try {
        const topic = yield controller_1.default.getTopicDataController();
        console.log("Topics:", topic);
        res.send(topic);
    }
    catch (error) {
        console.log("err from route:", error);
        res.status(500).send('Internal Server Error');
    }
}));
exports.default = routes;
//  export default function mainRoutes(){
//     console.log("inside m r");
//         routes.get('/topics',async (req:Request,res:Response)=>{
//             console.log("req",req);
//             const topic=await Controller.getTopicDataController();
//             console.log("Topics:",topic);
//             res.send(topic);  
//         })
//     // } catch (error) {
//     //     console.log("err from route:",error);   
//     // }
//     return routes;
// }
// module.exports={mainRoutes};
//const topic=await Utils.getData();
//console.log("accounts:",topic);
