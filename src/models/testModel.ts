import { Sequelize,Model,DataType, DataTypes } from 'sequelize';

 const sequelize = new Sequelize('testdb', 'root', 'root', {
    host: 'localhost',
    dialect:'mssql',
    omitNull:true,
    define:{
      timestamps:false,
    }
  });

  class Tests extends Model{
    declare TestId:number;
    declare OptionId:number;
    declare SelectedOption:number;
    declare CorrectOption:number;
    declare DifficultyLevel:number;
    declare CreatedBy:string;
    declare CreatedAt:string;
    declare UpdatedBy:string;
    declare UpdatedAt:string;
    declare status:string;
    declare QuestionId:number;
    declare TopicId:number;
    declare UserEmail:string;
  }

  module.exports= Tests.init(
    {
        TestId:{
          primaryKey:true,
          type: new DataTypes.INTEGER,
          autoIncrement:true,
        },
        OptionId:{
            type: new DataTypes.INTEGER,
            allowNull: false,
          },
          SelectedOption:{
            type: new DataTypes.INTEGER,
            allowNull: false,
          },
          CorrectOption:{
            type: new DataTypes.INTEGER,
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
          QuestionId:{
            type: new DataTypes.INTEGER,
            allowNull: false,
          },
          TopicId:{
            type: new DataTypes.INTEGER,
            allowNull: false,
          },
          UserEmail: {
            type: new DataTypes.STRING(128),
            allowNull: false,
          },
      },
      {
        tableName: 'Tests',
        sequelize,
      },
);

export default sequelize;