import { DataTypes, UUID } from "sequelize";
import sequelize from "../config/database";
import uuid from 'uuid'
import { randomUUID } from "crypto";
// users model

const users = sequelize.define('users', {
    id:
    {
        type: DataTypes.UUID,
        defaultValue: randomUUID,
        primaryKey: true,
        // unique: true,
        allowNull: false
    },
    name:
    {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Product name is required' },
            is: ["^[A-Za-z\\s]+$"]
        }
    },
    email: { 
        type: DataTypes.STRING,
        validate:{
            notEmpty:{
                msg:"Email Cannot be Empty"
            },
            isEmail:{
                msg:"Invalid Email Address"
            }
        } 
    },
    password: { 
        type: DataTypes.STRING,
        validate:{
            notEmpty:{
                msg:"Password Cannot be Empty or Null"
            },
        } 
    },
    createdAt: {
        type:DataTypes.DATE,
        defaultValue: Date.now(),
    },
    updatedAt:{
        type:DataTypes.DATE,
        defaultValue: Date.now(),
    }
});

export default users;