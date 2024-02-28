import express from 'express';
declare function getUserService(data: any): Promise<any[] | express.Response<any, Record<string, any>>>;
declare function getUserByEmailService(data: any): Promise<any>;
declare function getUserAuthService(data: any): Promise<any>;
declare const _default: {
    getUserService: typeof getUserService;
    getUserByEmailService: typeof getUserByEmailService;
    getUserAuthService: typeof getUserAuthService;
};
export default _default;
