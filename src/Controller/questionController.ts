import express from 'express';
const app=express();
import  questionServices from '../Services/questionServices.ts';

async function getQuestionDataController(tid:any) {
    try {
        const data = await questionServices.getQuestionsService(tid)
        return data
    } catch (error) {
        console.log("error in fetch:", error);
    }
}

async function getQuestionByIdController(qid:any) {
    try {
        const data = await questionServices.getQuestionsByIdService(qid);
        return data
    } catch (error) {
        console.log("error in fetch:", error);
    }
}

async function getAllQuestionByTopicIdController(data:any) {
    try {
        const res = await questionServices.getAllQuestionsByTopicIdService(data)
        return res
    } catch (error) {
        console.log("error in fetch:", error);
    }
}

async function getQuestionDataByDescriptionController(ques:any) {
    try {
        const data = await questionServices.getQuestionsByDescriptionService(ques)
        return data
    } catch (error) {
        console.log("error in fetch:", error);
        return error;
    }
}

async function saveQuestionDataController(data:any) {
    try {
        const response = await questionServices.saveQuestionsService(data)
        return response;  
    } catch (error) {
        console.log("error in fetch:", error);
        return error;
    }
}

async function deleteQuestionController(qid:any) {
    try {
        const data = await questionServices.deleteQuestionService(qid)
        return data
    } catch (error) {
        console.log("error in fetch:", error);
        return error;
    }
}

async function editQuestionController(data:any) {
    try {
        const resData = await questionServices.editQuestionService(data)
        return resData
    } catch (error) {
        console.log("error in fetch:", error);
        return error;
    }
}

export={getQuestionDataController,saveQuestionDataController,getQuestionDataByDescriptionController,getAllQuestionByTopicIdController,deleteQuestionController,getQuestionByIdController,editQuestionController}


