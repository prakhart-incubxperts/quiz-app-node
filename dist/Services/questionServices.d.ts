declare function getQuestionsService(tid: any): Promise<any>;
declare function getQuestionsByIdService(qid: any): Promise<any>;
declare function getAllQuestionsByTopicIdService(tid: any): Promise<any>;
declare function getQuestionsByDescriptionService(data: any): Promise<any>;
declare function saveQuestionsService(data: any): Promise<any>;
declare function deleteQuestionService(qid: any): Promise<any>;
declare function editQuestionService(data: any): Promise<any>;
declare const _default: {
    getQuestionsService: typeof getQuestionsService;
    saveQuestionsService: typeof saveQuestionsService;
    getQuestionsByDescriptionService: typeof getQuestionsByDescriptionService;
    getAllQuestionsByTopicIdService: typeof getAllQuestionsByTopicIdService;
    deleteQuestionService: typeof deleteQuestionService;
    getQuestionsByIdService: typeof getQuestionsByIdService;
    editQuestionService: typeof editQuestionService;
};
export default _default;
