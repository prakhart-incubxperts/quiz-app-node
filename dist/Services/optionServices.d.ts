import express from 'express';
declare function getOptionsByQuestionIdService(qid: any): Promise<any[] | express.Response<any, Record<string, any>>>;
declare function getOptionByQuestionId(qid: number): Promise<any>;
declare function getCorrectOptionService(id: number, value: number): Promise<any>;
declare function saveOptionsService(data: any): Promise<any>;
declare function editOptionService(data: any): Promise<any>;
declare const _default: {
    saveOptionsService: typeof saveOptionsService;
    getOptionsByQuestionIdService: typeof getOptionsByQuestionIdService;
    getOptionByQuestionId: typeof getOptionByQuestionId;
    editOptionService: typeof editOptionService;
    getCorrectOptionService: typeof getCorrectOptionService;
};
export default _default;
