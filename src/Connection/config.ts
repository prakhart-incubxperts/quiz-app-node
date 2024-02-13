interface DbConfig {
  user: string;
  password: string;
  server: string;
  database: string;
  options: {
    encrypt: boolean;
  };
}

export const config:DbConfig = {
    user:'root',
    password:'root',
    server: 'localhost',
    database: 'testdb',
    options: {
      encrypt: false, 
    },
}
