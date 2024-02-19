import express, { response } from 'express';
const app=express();
import  userServices from '../Services/userServices';

    async function getUserDataController(data:any) {
        try {
            const res = await userServices.getUserService(data)
            return res
        } catch (error) {
            console.log("error in fetch:", error);
            return response.status(400);
        }
    }

    async function getUserByEmailDataController(data:any) {
        try {
            const response = await userServices.getUserByEmailService(data)
            console.log("inside getusers after fetch data:", response);
            return response
        } catch (error) {
            console.log("error in fetch:", error);
            return response.status(400);
        }
    }

    

    export default {getUserDataController,getUserByEmailDataController}