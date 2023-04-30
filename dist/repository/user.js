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
const user_1 = __importDefault(require("../models/user"));
class users_repository {
    constructor() {
        this.create_user = (myuserData) => __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.create(myuserData);
        });
        this.update_user = (myuserData, id) => __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.update(myuserData, { where: { id: id } });
        });
        this.delete_user = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.destroy({
                where: {
                    id: id
                }
            });
        });
        this.get_user = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.findByPk(id);
        });
        this.get_user_by_email = (email) => __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.findOne({
                where: {
                    email: email
                }
            });
        });
        this.get_all_user = (page, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.findAndCountAll({
                offset: page,
                limit: limit,
                order: [["createdAt", "desc"]]
            });
        });
        this.search_user_by_name = (name, oPage, lPage) => __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.findAndCountAll({
                where: {
                    name: { [sequelize_1.Op.iLike]: `%${name}%` },
                    email: { [sequelize_1.Op.iLike]: `%${name}%` }
                },
                offset: oPage,
                limit: lPage
            });
        });
    }
}
exports.default = users_repository;
