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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const topicServices_1 = __importDefault(require("Services/topicServices"));
// let getTopic=new topicServices.default.getTopicsService();
function getTopicDataController() {
    return __awaiter(this, void 0, void 0, function* () {
        debugger;
        console.log("inside getdata");
        try {
            const data = yield topicServices_1.default.getTopicsService();
            console.log("inside getdata after fetch data:", data);
            return data;
        }
        catch (error) {
            console.log("error in fetch:", error);
        }
    });
}
module.exports = { getTopicDataController };
