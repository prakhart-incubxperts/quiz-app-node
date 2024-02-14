import { Sequelize,Model,DataType, DataTypes } from 'sequelize';

const sequelize = new Sequelize('testdb', 'root', 'root', {
    host: 'localhost',
    dialect:'mssql',
    omitNull:true,
    define:{
      timestamps:false,
    }
  });

  export default sequelize;