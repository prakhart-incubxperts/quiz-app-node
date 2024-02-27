declare function getTopicsService(): Promise<any>;
declare function getTopicExistsService(data: string): Promise<any>;
declare function getTopicNameExistsService(topic: string, id: number): Promise<any>;
declare function editTopicService(topic: string, id: number): Promise<any>;
declare function saveTopicsService(data: any): Promise<any>;
declare const _default: {
    getTopicsService: typeof getTopicsService;
    saveTopicsService: typeof saveTopicsService;
    getTopicExistsService: typeof getTopicExistsService;
    getTopicNameExistsService: typeof getTopicNameExistsService;
    editTopicService: typeof editTopicService;
};
export default _default;
