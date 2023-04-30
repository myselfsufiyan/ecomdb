"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const order_1 = __importDefault(require("./order"));
const products_1 = __importDefault(require("./products"));
const MyAssociations = function () {
    database_1.default.models.users.hasMany(database_1.default.models.orders, { foreignKey: "user_id", onUpdate: "CASCADE", onDelete: "CASCADE" });
    database_1.default.models.orders.belongsTo(database_1.default.models.users, { foreignKey: "user_id", onUpdate: "CASCADE", onDelete: "CASCADE" });
    database_1.default.models.orders.belongsToMany(products_1.default, { through: "orderitems", foreignKeyConstraint: true, onUpdate: "CASCADE", onDelete: "CASCADE" });
    database_1.default.models.products.belongsToMany(order_1.default, { through: "orderitems", foreignKeyConstraint: true, onUpdate: "CASCADE", onDelete: "CASCADE" });
};
exports.default = MyAssociations;
