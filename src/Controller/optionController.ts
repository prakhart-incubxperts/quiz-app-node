import express, { response } from 'express';
const app=express();
import  optionServices from '../Services/optionServices';
let array: any[] = [];

async function getOptionByQuestionIdController(data:any) {
    try {
            const res = await optionServices.getOptionsByQuestionIdService(data)
             return res;
    } catch (error) {
        console.log("error in fetch:", error);
        return response.status(500);
    }
}

async function getSpecificOptionByQuestionIdController(data:any) {
    try {
            const res = await optionServices.getOptionByQuestionId(data)
             return res;
    } catch (error) {
        console.log("error in fetch:", error);
        return response.status(500);
    }
}

async function getCorrectOptionController(id:number,value:number) {
    try {
            const res = await optionServices.getCorrectOptionService(id,value)
             return res;
    } catch (error) {
        console.log("error in fetch:", error);
        return response.status(500);
    }
}

async function saveOptionsDataController(data:any) {
    try {
        const response = await optionServices.saveOptionsService(data)
        return response;  
    } catch (error) {
        console.log("error in fetch:", error);
        return response.status(500);
    }
}

async function editOptionsController(data:any) {
    try {
        const response = await optionServices.editOptionService(data)
        return response; 
    } catch (error) {
        console.log("error in fetch:", error);
        return response.status(500);
    }
}

export={saveOptionsDataController,getOptionByQuestionIdController,getSpecificOptionByQuestionIdController,editOptionsController,getCorrectOptionController}