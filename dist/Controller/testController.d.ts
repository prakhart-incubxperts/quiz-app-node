import express from 'express';
declare function getTestRankController(data: any): Promise<express.Response<any, Record<string, any>> | object[]>;
declare function saveTestDataController(data: any, id: number): Promise<any>;
declare function getTestAttemptController(data: number[]): Promise<any[] | express.Response<any, Record<string, any>> | 0>;
declare const _default: {
    saveTestDataController: typeof saveTestDataController;
    getTestRankController: typeof getTestRankController;
    getTestAttemptController: typeof getTestAttemptController;
};
export default _default;
