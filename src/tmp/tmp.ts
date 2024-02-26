import express, {Express,Request,Response} from 'express';
const app=express();
import cors from 'cors';
import sql from 'mssql';
import {config} from '../Connection/config';
app.use(cors());


const query="SELECT * from Topics";

async function fetch(){
    sql.connect(config, async (err) => {
        if (err) console.log('Failed to connect to SQL Server.', err);
        else {
            console.log('Connected to SQL Server.');
            
            const request = new sql.Request();
            const res= await request.query(query, (err: any, result: any) => {
                if (err) console.log('Failed to execute SQL query.');
                else console.log(result);
                return result;
            });
            return res;
        }
      });
    
}
fetch();




app.listen(3000,()=>{
    console.log("listening at port:9000");  
})