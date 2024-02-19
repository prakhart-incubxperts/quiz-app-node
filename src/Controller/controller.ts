import express, { response } from 'express';
const app=express();
import  topicServices from '../Services/topicServices';

    async function getTopicDataController() {
        try {
            const data = await topicServices.getTopicsService();
            return data
        } catch (error) {
            console.log("error:",error);
            return response.status(500);
        }
    }

    async function getTopicExistsController(data:any) {
        try {
            const response = await topicServices.getTopicExistsService(data);
            return response;
        } catch (error) {
            console.log("error:",error);
            return response.status(500);
        }
    }

    async function getTopicNameExistsController(topic:any,id:any) {
        try {
            const response = await topicServices.getTopicNameExistsService(topic,id);
            return response;
        } catch (error) {
            console.log("error:",error);
            return response.status(500);
        }
    }

    async function editTopicNameController(topic:any,id:any) {
        try {
            const response = await topicServices.editTopicService(topic,id);
            return response;
        } catch (error) {
            console.log("error:",error);
            return response.status(500);
        }
    }

    async function saveTopicDataController(data:any) {
        try {
            const response = await topicServices.saveTopicsService(data)
            return response;    
        } catch (error) {
            console.log("error:",error);
            return response.status(500);
        }
    }
    
    export = {getTopicDataController,saveTopicDataController,getTopicExistsController,getTopicNameExistsController,editTopicNameController};

