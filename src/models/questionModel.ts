import { Sequelize,Model,DataType, DataTypes } from 'sequelize';
import sequelize from '../Connection/sequelizeConnection';


// const sequelize = new Sequelize('testdb', 'root', 'root', {
//     host: 'localhost',
//     dialect:'mssql',
//     omitNull:true,
//     define:{
//       timestamps:false,
//     }
//   });

  class Questions extends Model{
    declare QuestionId:number;
    declare QuestionDescription:string;
    declare DifficultyLevel:number;
    declare CreatedBy:string;
    declare CreatedAt:string;
    declare UpdatedBy:string;
    declare UpdatedAt:string;
    declare status:string;
    declare TopicId:number;
  }

  module.exports= Questions.init(
    {
        QuestionId:{
          primaryKey:true,
          type: new DataTypes.INTEGER,
          autoIncrement:true,
        },
          QuestionDescription: {
            type: new DataTypes.STRING(128),
            allowNull: false,
          },
          DifficultyLevel:{
            type: new DataTypes.INTEGER,
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
          TopicId:{
            type: new DataTypes.INTEGER,
            allowNull: false,
          },
      },
      {
        tableName: 'Questions',
        sequelize,
      },
);