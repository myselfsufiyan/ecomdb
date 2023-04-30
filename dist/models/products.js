"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const crypto_1 = require("crypto");
// products model
const products = database_1.default.define('products', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: crypto_1.randomUUID,
        primaryKey: true,
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
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
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
exports.default = products;
