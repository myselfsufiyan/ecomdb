"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const crypto_1 = require("crypto");
// users model
const users = database_1.default.define('users', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: crypto_1.randomUUID,
        primaryKey: true,
        // unique: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Product name is required' },
            is: ["^[A-Za-z\\s]+$"]
        }
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "Email Cannot be Empty"
            },
            isEmail: {
                msg: "Invalid Email Address"
            }
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "Password Cannot be Empty or Null"
            },
        }
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: Date.now(),
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: Date.now(),
    }
});
exports.default = users;
