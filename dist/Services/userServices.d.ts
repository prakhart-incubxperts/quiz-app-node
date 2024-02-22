import express from 'express';
declare function getUserService(data: any): Promise<any[] | express.Response<any, Record<string, any>>>;
declare function getUserByEmailService(data: any): Promise<any>;
declare const _default: {
    getUserService: typeof getUserService;
    getUserByEmailService: typeof getUserByEmailService;
};
export default _default;
