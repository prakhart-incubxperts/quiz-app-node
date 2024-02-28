import { Sequelize,Model, DataTypes } from 'sequelize';
import sequelize from '../Connection/sequelizeConnection';


// const sequelize = new Sequelize('testdb', 'root', 'root', {
//     host: 'localhost',
//     dialect:'mssql',
//     omitNull:true,
//     define:{
//       timestamps:false,
//     }
//   });

  class Topics extends Model{
    declare TopicId:number;
    declare TopicName:string;
    declare CreatedBy:string;
    declare CreatedAt:Date;
    declare UpdatedBy:string;
    declare updatedAt:Date;
    declare status:string;
}

module.exports=Topics.init(
    {
        TopicId:{
          primaryKey:true,
          type: new DataTypes.INTEGER,
          autoIncrement:true,
        },
        TopicName: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
          CreatedBy: {
            type: new DataTypes.STRING(128),
            allowNull: false,
          },
          CreatedAt: {
            type: 'TIMESTAMP',
            defaultValue: new Date().toISOString(),
            allowNull: true,
          },
          UpdatedBy: {
            type: new DataTypes.STRING(128),
            allowNull: true,
          },
          UpdatedAt: {
            type: 'TIMESTAMP',
            defaultValue: new Date().toISOString(),
            allowNull: true,
          },
          status: {
            type: new DataTypes.STRING(128),
            allowNull: false,
          },
      },
      {
        tableName: 'Topics',
        sequelize,
      },
);