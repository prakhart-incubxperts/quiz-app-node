declare function getTopicDataController(): Promise<any>;
declare function getTopicExistsController(data: any): Promise<any>;
declare function getTopicNameExistsController(topic: any, id: number): Promise<any>;
declare function editTopicNameController(topic: any, id: number): Promise<any>;
declare function saveTopicDataController(data: any): Promise<any>;
declare const _default: {
    getTopicDataController: typeof getTopicDataController;
    saveTopicDataController: typeof saveTopicDataController;
    getTopicExistsController: typeof getTopicExistsController;
    getTopicNameExistsController: typeof getTopicNameExistsController;
    editTopicNameController: typeof editTopicNameController;
};
export default _default;
