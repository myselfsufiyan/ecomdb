"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const crypto_1 = require("crypto");
// products model
const orders = database_1.default.define('orders', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: crypto_1.randomUUID,
        primaryKey: true,
        allowNull: false
    },
    product_id: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    totalprice: {
        type: sequelize_1.DataTypes.FLOAT
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("pending", "confirmed", "shipped", "delivered"),
    },
    user_id: {
        type: sequelize_1.DataTypes.UUID,
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
exports.default = orders;
