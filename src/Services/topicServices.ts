import express, { response } from 'express';
const app = express();
import { Op } from 'sequelize';
const Topics = require('../models/topicModel');

async function getTopicsService() {
    try {
        console.log("inside get topics serv");
        const res = await Topics.findAll({
            attributes: ['TopicId', 'TopicName', 'status']
        });
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

async function getTopicExistsService(data: string) {
    try {
        const res = await Topics.findAll({
            attributes: ['TopicId'],
            where: {
                TopicName: `${data}`
            }
        });
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

async function getTopicNameExistsService(topic: string, id: number) {
    try {
        const res = await Topics.findAll({
            attributes: ['TopicId'],
            where: {
                TopicName: `${topic}`,
                TopicId: {
                    [Op.ne]: id
                }
            }
        });
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

async function editTopicService(topic: string, id: number) {
    try {
        console.log("data:", topic, id);
        const res = await Topics.update({TopicName:`${topic}`}, {
            where: {
                TopicId: id
            }
        });
        console.log("topic update res:",res);
        
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}

async function saveTopicsService(data: any) {
    const datetime = new Date();
    try {
        const res=Topics.create({TopicName:`${data.TopicName}`,CreatedBy:`${data.CreatedBy}`,UpdatedBy:`${data.UpdatedBy}`,status:`${data.status}`});
        return res;
    } catch (error) {
        console.log("error:", error);
        return response.status(400);
    }
}
export default { getTopicsService, saveTopicsService, getTopicExistsService, getTopicNameExistsService, editTopicService }

