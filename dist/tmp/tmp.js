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
const cors_1 = __importDefault(require("cors"));
const mssql_1 = __importDefault(require("mssql"));
const config_1 = require("../Connection/config");
app.use((0, cors_1.default)());
let query = "SELECT * from Topics";
function fetch() {
    return __awaiter(this, void 0, void 0, function* () {
        mssql_1.default.connect(config_1.config, (err) => __awaiter(this, void 0, void 0, function* () {
            if (err)
                console.log('Failed to connect to SQL Server.', err);
            else {
                console.log('Connected to SQL Server.');
                const request = new mssql_1.default.Request();
                const res = yield request.query(query, (err, result) => {
                    if (err)
                        console.log('Failed to execute SQL query.');
                    else
                        console.log(result);
                    return result;
                });
                return res;
            }
        }));
    });
}
fetch();
app.listen(3000, () => {
    console.log("listening at port:9000");
});
