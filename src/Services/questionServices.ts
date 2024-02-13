import { response } from 'express';
import dbConnection from '../Connection/dbConnection.ts';
import { Sequelize } from 'sequelize';
const Questions = require('../models/questionModel.ts');

async function getQuestionsService(tid: any) {
    try {
        const res=await Questions.findAll({
            where: {
              TopicId: tid,
            },
            order: Sequelize.literal('NEWID()'),
            limit: 5,
          });
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

async function getQuestionsByIdService(qid: any) {
    try {
        const res= await Questions.findAll({
            where:{
                QuestionId:qid
            }
        })
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

async function getAllQuestionsByTopicIdService(tid: any) {
    try {
        const res= await Questions.findAll({
            where:{
                TopicId:tid
            }
        })
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

async function getQuestionsByDescriptionService(data: any) {
    try {
        const res=Questions.findAll({
            attributes:['QuestionId'],
            where:{
                TopicId:data.tid,
                QuestionDescription:`${data.question}`
            }
        })
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

async function saveQuestionsService(data: any) {
    try {
        const res=await Questions.create({
            QuestionDescription:`${data.QuestionDescription}`,DifficultyLevel:data.DifficultyLevel,CreatedBy:`${data.CreatedBy}`,UpdatedBy:`${data.CreatedBy}`,status:`${data.status}`,TopicId:data.TopicId
        })
        console.log("ques res id:",res?.QuestionId);
        return res?.QuestionId;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

async function deleteQuestionService(qid: any) {
    try {
        const res = await Questions.update(
            { status: 'Deactive' },
            {
                where: {
                    QuestionId: qid
                }
            }
        )
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

async function editQuestionService(data: any) {
    try {
        const res = await Questions.update(
            { QuestionDescription: `${data.QuestionDescription}`, DifficultyLevel: data.DifficultyLevel },
            {
                where: {
                    QuestionId: data.QuestionId
                }
            }
        )
        console.log("update res:", res);
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

export = { getQuestionsService, saveQuestionsService, getQuestionsByDescriptionService, getAllQuestionsByTopicIdService, deleteQuestionService, getQuestionsByIdService, editQuestionService }