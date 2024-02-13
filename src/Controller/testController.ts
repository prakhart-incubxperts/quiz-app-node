import express, { response } from 'express';
const app=express();
import  testServices from '../Services/testServices.ts';

async function getTestRankController(data:any) {
    try {
        const response = await testServices.TestRankService(data)
        return response; 
    } catch (error) {
        console.log("error:",error);
        return response.status(500);
    }
}

async function saveTestDataController(data:any,id:number) {
    try {
        const response = await testServices.saveTestsService(data,id)
        return response;  
    } catch (error) {
        console.log("error:",error);
        return response.status(500);
    }
}

async function getTestAttemptController(data:any) {
    try {
        const response = await testServices.testAttemptService(data)
        return response; 
    } catch (error) {
        console.log("error:",error);
        return response.status(500);
    }
}

export={saveTestDataController,getTestRankController,getTestAttemptController}