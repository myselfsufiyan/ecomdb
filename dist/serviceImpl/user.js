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
const user_1 = __importDefault(require("../repository/user"));
class UserServiceImplClass {
    constructor() {
        this.create_user = (myuserData) => __awaiter(this, void 0, void 0, function* () {
            return yield this.user_repo.create_user(myuserData);
        });
        this.update_user = (myuserData, id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.user_repo.update_user(myuserData, id);
        });
        this.delete_user = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.user_repo.delete_user(id);
        });
        this.get_user_by_email = (email) => __awaiter(this, void 0, void 0, function* () {
            return yield this.user_repo.get_user_by_email(email);
        });
        this.get_user = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.user_repo.get_user(id);
        });
        this.get_all_user = (page, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield this.user_repo.get_all_user(page, limit);
        });
        this.search_user_by_name = (name, oPage, lPage) => __awaiter(this, void 0, void 0, function* () {
            return yield this.user_repo.search_user_by_name(name, oPage, lPage);
        });
        this.user_repo = new user_1.default();
    }
}
exports.default = UserServiceImplClass;
