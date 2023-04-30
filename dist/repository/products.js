"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const products_1 = __importDefault(require("../models/products"));
class products_repository {
    constructor() {
        this.create_product = (myProductData) => __awaiter(this, void 0, void 0, function* () {
            return yield products_1.default.create(myProductData);
        });
        this.update_product = (myProductData, id) => __awaiter(this, void 0, void 0, function* () {
            return yield products_1.default.update(myProductData, { where: { id: id } });
        });
        this.delete_product = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield products_1.default.destroy({
                where: {
                    id: id
                }
            });
        });
        this.get_product = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield products_1.default.findByPk(id);
        });
        this.get_all_product = (page, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield products_1.default.findAndCountAll({
                offset: page,
                limit: limit,
                order: [["createdAt", "DESC"]],
            });
        });
        this.search_product_by_name = (name, oPage, lPage) => __awaiter(this, void 0, void 0, function* () {
            return yield products_1.default.findAndCountAll({
                where: {
                    name: { [sequelize_1.Op.iLike]: `%${name}%` }
                },
                offset: oPage,
                limit: lPage
            });
        });
    }
}
exports.default = products_repository;
