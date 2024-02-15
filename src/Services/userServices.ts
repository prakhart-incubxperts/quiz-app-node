import express, { response } from 'express';
// import {Users} from '../tmp/UsersModel.ts';
const users=require('../models/UsersModel');
const app=express();
import dbConnection from '../Connection/dbConnection.ts';


async function getUserService(data:any){
    try {
        console.log("data.UserName",data.UserName);
        
        const [user,created]=await users.findOrCreate({
            where:{UserName:`${data.UserName}`,Email:`${data.UserEmail}`,Password:`${data.Password}`,CreatedBy:`${data.UserName}`,UpdatedBy:'', status:'Active'},
          }) 
          return [user,created];
    } catch (error) {
        console.log("error:",error);
        return response.status(500);
    }  
}

async function getUserByEmailService(data:any){
    try {
        let query=`SELECT UserId FROM Users WHERE Email='${data}'`;
    const res=await dbConnection(query);
    return res;
    } catch (error) {
        console.log("error:",error);
        return response.status(400);
    }  
}



export={getUserService,getUserByEmailService}