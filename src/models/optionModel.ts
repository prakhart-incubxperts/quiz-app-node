import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../Connection/sequelizeConnection.ts';


// const sequelize = new Sequelize('testdb', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mssql',
//     omitNull: true,
//     define: {
//         timestamps: false,
//     }
// });

class Options extends Model {
    declare OptionId: number;
    declare Option1: string;
    declare Option2: string;
    declare Option3: string;
    declare Option4: string;
    declare CorrectOption: number;
    declare CreatedBy: string;
    declare CreatedAt: Date;
    declare UpdatedBy: string;
    declare updatedAt: Date;
    declare status: string;
    declare QuestionId: number | any
}

module.exports = Options.init(
    {
        OptionId: {
            primaryKey: true,
            type: new DataTypes.INTEGER,
            autoIncrement: true,
        },
        Option1: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        Option2: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        Option3: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        Option4: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        CorrectOption:{
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
    },
    {
        tableName: 'Options',
        sequelize,
    },
);

async function option(){
    const user=await Options.findOne({
        where:{
            QuestionId:53,
            CorrectOption:1
        }
    });
    console.log(user);
}
