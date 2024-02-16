import { timeStamp } from 'console';
import { Table } from 'mssql';
import { Sequelize,Model,DataType, DataTypes } from 'sequelize';
import sequelize from '../Connection/sequelizeConnection.ts';

// const sequelize = new Sequelize('testdb', 'root', 'root', {
//     host: 'localhost',
//     dialect:'mssql',
//     omitNull:true,
//     define:{
//       timestamps:false,
//     }
//   });

   class Users extends Model{
    declare UserId:number;
    declare UserName:string;
    declare Email:string;
    declare Password:string;
    declare CreatedBy:string;
    declare CreatedAt:Date;
    declare UpdatedBy:string;
    declare updatedAt:Date;
    declare status:string;
}

module.exports= Users.init(
    {
        UserId:{
          primaryKey:true,
          type: new DataTypes.INTEGER,
          autoIncrement:true,
        },
        UserName: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
        Email: {
            type: new DataTypes.STRING(128),
            allowNull: false,
          },
          Password: {
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
        tableName: 'Users',
        sequelize,
      },
);

async function findUsers(){

    // const user=await Users.findAll({
    //     attributes:['UserName','Email','CreatedBy','status']
    // });
    // console.log(user);
    

    // const newUser=await Users.create({
    //   UserName:'demo',Email:'demo@gmail.com',CreatedBy:'demo',UpdatedBy:'demo', status:'Active',
    // })
    // console.log(newUser);


    // const deletedUser=await Users.update({status:'Active'},{where:{
    //   status:'Deactive'
    // }});
    // console.log(deletedUser);
  
    // const [user,created]=await Users.findOrCreate({
    //   where:{UserName:'jon',Email:'jon@gmail.com',CreatedBy:'jon',UpdatedBy:'', status:'Active'},
    // })
    // console.log(created);
    
    
}
// findUsers();

