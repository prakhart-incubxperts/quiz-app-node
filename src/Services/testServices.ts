import express, { response } from 'express';
const app=express();
import dbConnection from '../Connection/dbConnection.ts';
// import sequelize from 'sequelize/types/sequelize';
import { QueryTypes, Sequelize } from 'sequelize';
import sequelize from 'models/testModel.ts';
const Tests=require('../models/testModel');


async function saveTestsService(data:any,id:number){
    try {
    // let query=`SET IDENTITY_INSERT Tests ON INSERT into Tests (TestId,OptionId,SelectedOption,CorrectOption,DifficultyLevel,CreatedBy,CreatedAt,UpdatedBy,UpdatedAt,status,QuestionId,TopicId,UserEmail) values (${id},${data.OptionId},${data.SelectedOption},${data.CorrectOption},${data.DifficultyLevel},'${data.CreatedBy}',CURRENT_TIMESTAMP,'${data.UpdatedBy}','','${data.status}',${data.QuestionId},${data.TopicId},'${data?.UserMail}')`;
    // const res=await dbConnection(query);
    const res=await Tests.create({
        TestId:id,OptionId:data.OptionId,SelectedOption:data.SelectedOption,CorrectOption:data.CorrectOption,DifficultyLevel:data.DifficultyLevel,CreatedBy:`${data.CreatedBy}`,UpdatedBy:`${data.UpdatedBy}`,status:`${data.status}`,QuestionId:data.QuestionId,TopicId:data.TopicId,UserEmail:`${data?.UserMail}`
    })
    return res;
        
    } catch (error) {
        console.log("error:",error);
        return response.status(400);
    } 
}

async function TestRankService(data:any){
    try {
    // let query=`SELECT TestId,CreatedBy, TopicId,MAX(UserEmail) AS Email, COUNT(*) AS NumberOfRecords FROM Tests WHERE SelectedOption=CorrectOption AND TopicId=${data} GROUP BY CreatedBy, TopicId,TestId;`; //SELECT TOP 1 column FROM table ORDER BY NEWID()
    // const res=await dbConnection(query);
    const res=await Tests.findAll({
        attributes: ['TestId', 'CreatedBy', 'TopicId', [Sequelize.fn('MAX', Sequelize.col('UserEmail')), 'Email'], [Sequelize.fn('COUNT', Sequelize.literal('*')), 'NumberOfRecords']],
        where: {
          SelectedOption: Sequelize.col('CorrectOption'),
          TopicId: data,
        },
        group: ['CreatedBy', 'TopicId', 'TestId'],
      })
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
        let query=`SELECT COUNT(*) AS Attempts FROM (SELECT COUNT(*) AS Attempts FROM Tests WHERE TopicId=${tid[i]} GROUP BY TestId) AS Attempts;`; //SELECT TOP 1 column FROM table ORDER BY NEWID()
        const res=await dbConnection(query);
        // const res=sequelize.query(`SELECT COUNT(*) AS Attempts FROM (SELECT COUNT(*) AS Attempts FROM Tests WHERE TopicId=${tid[i]} GROUP BY TestId) AS Attempts;`,{type:QueryTypes.SELECT});
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