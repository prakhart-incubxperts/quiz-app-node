import express, { response } from 'express';
const app=express();
import dbConnection from '../Connection/dbConnection.ts';
const Options = require('../models/optionModel.ts');
let arr:any[]=[];

async function getOptionsByQuestionIdService(qid:any){
    arr=[];
   try {
    for(let i=0;i<qid.length;i++){
        const res=await Options.findAll({
            where:{QuestionId:qid[i]}
        });
        arr.push(res[0]);         
    }
    return arr;
   } catch (error) {
    console.log("error:",error);
        return response.status(500);
   }   
}

async function getOptionByQuestionId(qid:number){
    try {
        const res=await Options.findAll({attributes:['OptionId','Option1','Option2','Option3','Option4','CorrectOption','status','QuestionId']},
        {
            where:{
                QuestionId:qid
            }
        })
         return res;
    } catch (error) {
        console.log("error:",error);
        return response.status(400);
    }  
}

async function saveOptionsService(data:any){
    try {
        const res=await Options.create({Option1:`${data.Option1}`,Option2:`${data.Option2}`,Option3:`${data.Option3}`,Option4:`${data.Option4}`,CorrectOption:data.CorrectOption,CreatedBy:`${data.CreatedBy}`,UpdatedBy:'admin',status:`Active`,QuestionId:data.QuestionId})
        return res;
    } catch (error) {
        console.log("error:",error);
        return response.status(400);
    }  
}

async function editOptionService(data:any){
    try {
        const res=await Options.update({Option1:`${data.Option1}`,Option2:`${data.Option2}`,Option3:`${data.Option3}`,Option4:`${data.Option4}`,CorrectOption:data.CorrectOption,UpdatedAt:new Date().toISOString()},{
            where:{
                QuestionId:data.QuestionId
            }
        })
        return res;
    } catch (error) {
        console.log("error:",error);
        return response.status(400);
    }   
}

export={saveOptionsService,getOptionsByQuestionIdService,getOptionByQuestionId,editOptionService}