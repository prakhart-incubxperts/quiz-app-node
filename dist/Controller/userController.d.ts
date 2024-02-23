import express from 'express';
declare function getUserDataController(data: any): Promise<any[] | express.Response<any, Record<string, any>>>;
declare function getUserByEmailDataController(data: any): Promise<any>;
declare const _default: {
    getUserDataController: typeof getUserDataController;
    getUserByEmailDataController: typeof getUserByEmailDataController;
};
export default _default;
