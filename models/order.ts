import { DataTypes, UUID } from "sequelize";
import sequelize from "../config/database";
import { randomUUID } from "crypto";
import products from "../models/products";
// products model

const orders = sequelize.define('orders', {
    id:
    {
        type: DataTypes.UUID,
        defaultValue: randomUUID,
        primaryKey: true,
        allowNull: false
    },
    product_id:{
        type:DataTypes.ARRAY(DataTypes.STRING),
    },
    quantity:{
        type:DataTypes.INTEGER,
    },
    totalprice: { 
        type: DataTypes.FLOAT 
    },
    status: {
        type: DataTypes.ENUM("pending", "confirmed", "shipped", "delivered"),
    },
    user_id:{
        type:DataTypes.UUID,
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

export default orders;