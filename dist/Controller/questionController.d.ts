declare function getQuestionDataController(tid: any): Promise<any>;
declare function getQuestionByIdController(qid: any): Promise<any>;
declare function getAllQuestionByTopicIdController(data: any): Promise<any>;
declare function getQuestionDataByDescriptionController(ques: any): Promise<any>;
declare function saveQuestionDataController(data: any): Promise<any>;
declare function deleteQuestionController(qid: any): Promise<any>;
declare function editQuestionController(data: any): Promise<any>;
declare const _default: {
    getQuestionDataController: typeof getQuestionDataController;
    saveQuestionDataController: typeof saveQuestionDataController;
    getQuestionDataByDescriptionController: typeof getQuestionDataByDescriptionController;
    getAllQuestionByTopicIdController: typeof getAllQuestionByTopicIdController;
    deleteQuestionController: typeof deleteQuestionController;
    getQuestionByIdController: typeof getQuestionByIdController;
    editQuestionController: typeof editQuestionController;
};
export default _default;
