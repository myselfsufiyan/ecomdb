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
const order_1 = __importDefault(require("../repository/order"));
const products_1 = __importDefault(require("./products"));
class orderServiceImplClass {
    constructor() {
        this.create_order = (myorderData) => __awaiter(this, void 0, void 0, function* () {
            return yield this.order_repo.create_order(myorderData);
        });
        this.get_order = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.order_repo.get_order(id);
        });
        this.get_all_order = (page, limit) => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.order_repo.get_all_order(page, limit);
            return response;
        });
        this.order_repo = new order_1.default();
        this.product_repo = new products_1.default();
    }
}
exports.default = orderServiceImplClass;
