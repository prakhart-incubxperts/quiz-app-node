import express, { response } from 'express';
const app=express();
// import sequelize from 'sequelize/types/sequelize';
import { QueryTypes, Sequelize } from 'sequelize';
// import sequelize from 'models/testModel.ts';
const Tests=require('../models/testModel');
import sequelize from '../Connection/sequelizeConnection.ts';


async function saveTestsService(data:any,id:number){
    try {
    const res=await Tests.create({
        TestId:id,OptionId:data.OptionId,SelectedOption:data.SelectedOption,CorrectOption:data.CorrectOption,DifficultyLevel:data.DifficultyLevel,CreatedBy:`${data.CreatedBy}`,UpdatedBy:`${data.UpdatedBy}`,status:`${data.status}`,QuestionId:data.QuestionId,TopicId:data.TopicId,UserEmail:`${data?.UserEmail}`
    })
    return res;  
    } catch (error) {
        console.log("error:",error);
        return response.status(400);
    } 
}

async function TestRankService(data:number){
    try {
    const res=await sequelize.query(`SELECT TestId,CreatedBy, TopicId,MAX(UserEmail) AS Email, COUNT(*) AS NumberOfRecords FROM Tests WHERE SelectedOption=CorrectOption AND TopicId=${data} GROUP BY CreatedBy, TopicId,TestId;`,{ type: QueryTypes.SELECT });
    return res;
    } catch (error) {
        console.log("error:",error);
        return response.status(400);
    }   
}

async function testAttemptService(tid:any){
    let arr:any[]=[];
    try {
    for(let i=0;i<tid?.length;i++){
        const res=await sequelize.query(`SELECT COUNT(*) AS Attempts FROM (SELECT COUNT(*) AS Attempts FROM Tests WHERE (TopicId=${Number(tid[i])}) GROUP BY TestId) AS Attempts;`,{ type: QueryTypes.SELECT });
        arr.push(res[0]);
    }
    console.log("arr:",arr);
    return arr;   
    } catch (error) {
        console.log("error:",error);
        return response.status(400);
    }
}

export = {saveTestsService,TestRankService,testAttemptService}