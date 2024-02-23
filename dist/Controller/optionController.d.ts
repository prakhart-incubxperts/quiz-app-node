import express from 'express';
declare function getOptionByQuestionIdController(data: any): Promise<any[] | express.Response<any, Record<string, any>>>;
declare function getSpecificOptionByQuestionIdController(data: any): Promise<any>;
declare function getCorrectOptionController(id: number, value: number): Promise<any>;
declare function saveOptionsDataController(data: any): Promise<any>;
declare function editOptionsController(data: any): Promise<any>;
declare const _default: {
    saveOptionsDataController: typeof saveOptionsDataController;
    getOptionByQuestionIdController: typeof getOptionByQuestionIdController;
    getSpecificOptionByQuestionIdController: typeof getSpecificOptionByQuestionIdController;
    editOptionsController: typeof editOptionsController;
    getCorrectOptionController: typeof getCorrectOptionController;
};
export default _default;
