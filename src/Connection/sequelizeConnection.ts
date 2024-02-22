import { Sequelize,Model,DataType, DataTypes } from 'sequelize';

const sequelize = new Sequelize('testdb', 'root', 'rootmaster', {
    host: 'db-mssql-rds.c36oimkgarne.ap-south-1.rds.amazonaws.com',
    port:1433,
    dialect:'mssql',
    omitNull:true,
    define:{
      timestamps:false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  export default sequelize;