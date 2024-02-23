interface DbConfig {
    user: string;
    password: string;
    server: string;
    database: string;
    options: {
        encrypt: boolean;
    };
}
export declare const config: DbConfig;
export {};
