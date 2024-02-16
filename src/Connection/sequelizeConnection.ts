import { Sequelize,Model,DataType, DataTypes } from 'sequelize';

const sequelize = new Sequelize('testdb', 'root', 'rootmaster', {
    host: 'db-mssql-rds.c36oimkgarne.ap-south-1.rds.amazonaws.com',
    dialect:'mssql',
    omitNull:true,
    define:{
      timestamps:false,
    }
  });

  export default sequelize;