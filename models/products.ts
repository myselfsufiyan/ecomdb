import { DataTypes, UUID } from "sequelize";
import sequelize from "../config/database";
import { randomUUID } from "crypto";
// products model

const products = sequelize.define('products', {
    id:
    {
        type: DataTypes.UUID,
        defaultValue: randomUUID,
        primaryKey: true,
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
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.STRING,
    },
    stock: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now(),
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now(),
    }
});


export default products;