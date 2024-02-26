import express from 'express';
declare function saveTestsService(data: any, id: number): Promise<any>;
declare function TestRankService(data: number): Promise<express.Response<any, Record<string, any>> | object[]>;
declare function testAttemptService(tid: any): Promise<any[] | express.Response<any, Record<string, any>> | 0>;
declare const _default: {
    saveTestsService: typeof saveTestsService;
    TestRankService: typeof TestRankService;
    testAttemptService: typeof testAttemptService;
};
export default _default;
