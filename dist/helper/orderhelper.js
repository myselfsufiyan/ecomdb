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
const order_1 = __importDefault(require("../serviceImpl/order"));
const products_1 = __importDefault(require("../serviceImpl/products"));
class orderHelper {
    constructor() {
        this.getOrderById = (response) => __awaiter(this, void 0, void 0, function* () {
            try {
                let products = [];
                let data = [];
                if (response) {
                    for (let i = 0; i < response.product_id.length; i++) {
                        let res = yield this.product_serv.get_product(response.product_id[i]);
                        products.push(res);
                    }
                    data.push({ id: response.id, quantity: response.quantity, totalprice: response.totalprice, status: response.status, user_id: response.user_id, createdAt: response.createdAt, updatedAt: response.updatedAt, products: products });
                    return data;
                }
                else {
                    return { error: "Something went wrong please try again" };
                }
            }
            catch (error) {
                return error.message;
            }
        });
        this.order_serv = new order_1.default();
        this.product_serv = new products_1.default();
    }
}
exports.default = orderHelper;
