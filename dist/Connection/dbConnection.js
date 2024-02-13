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
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = require("mssql");
const config_1 = require("./config");
let pool = null;
function DBConnection(qry) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Check if the connection pool exists, if not, create one
            if (!pool) {
                pool = yield new mssql_1.ConnectionPool(config_1.config).connect();
                console.log('Connected to SQL Server (Connection Pool).');
            }
            const request = pool.request();
            const result = yield request.query(qry);
            console.log(result.recordset); // Logging the query result
            return result.recordset;
        }
        catch (error) {
            console.error('Error executing SQL query:', error);
            // Check for ECONNRESET error and handle accordingly
            if (error.code === 'ECONNRESET') {
                console.error('Connection reset. Reconnecting...');
                // Close the existing connection pool and set it to null
                if (pool) {
                    yield pool.close();
                    pool = null;
                }
                // Retry the query by recursively calling the function
                return DBConnection(qry);
            }
            throw error; // Rethrow other errors to handle them at the calling site
        }
    });
}
exports.default = DBConnection;
// import sql from 'mssql';
// // var configString=require('./config.ts');
// import {config} from './config';
//  let query:string;
// export default async function DBConnection(qry:string){
//   query=qry;
//   const response= await sql.connect(config,  (err) => {
//     if (err) console.log('Failed to connect to SQL Server.', err);
//     else {
//       console.log('Connected to SQL Server.>>>>>>>>>');
//       const request = new sql.Request();
//       const res=  request.query(query, (err: any, result: any) => {
//         if (err) console.log('Failed to execute SQL query.');
//         else console.log(result);
//         return result;
//       });
//       return res;
//     }
//     console.log("inside dbconn");
//   });
//   console.log("inside dbconn122");
//   return response;
// }
