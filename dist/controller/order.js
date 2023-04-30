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
const orderhelper_1 = __importDefault(require("../helper/orderhelper"));
class orderServiceControllerClass {
    constructor() {
        this.create_order = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let orderData = req.body; //console.log this later...
            // validate data here manually... using if else etc ...
            if (orderData) {
                let response = yield this.order_serv.create_order(orderData);
                if (response) {
                    res.status(200).json({ message: "The Order has successfully placed ", response: response });
                }
                else {
                    res.status(400).json({ message_error: "Something went wrong please try again" });
                }
            }
            else {
                res.status(400).json({ message_error: "Something went wrong please try again" });
            }
        });
        this.get_order = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.order_serv.get_order(req.params.id);
            try {
                let resp = yield this.order_helper.getOrderById(response);
                if (resp) {
                    console.log(resp, "This is the resp...");
                    res.status(200).json({ data: resp });
                }
                else {
                    res.status(400).json({ error: "Something went wrong" });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
        this.get_all_order = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let products = [];
            let data = [];
            let page = req.query.page;
            let limit = req.query.limit;
            if (Number(page) == 0 || Number(limit) == 0) {
                page = String(1);
                limit = String(10);
            }
            let offset = (Number(page) - 1) * Number(limit);
            let response = yield this.order_serv.get_all_order(offset, Number(limit));
            try {
                if (response) {
                    for (let i = 0; i < response.rows.length; i++) {
                        console.log(response.rows.length, "This is the response ...");
                        for (let j = 0; j < response.rows[i].product_id.length; j++) {
                            products.push(yield this.product_serv.get_product(response.rows[i].product_id[j]));
                        }
                        data.push({ count: response.count, rows: { id: response.rows[i].id, quantity: response.rows[i].quantity, totalprice: response.rows[i].totalprice, status: response.rows[i].status, user_id: response.rows[i].user_id, createdAt: response.rows[i].createdAt, updatedAt: response.rows[i].updatedAt, products: products } });
                    }
                    res.status(200).json({ data: data });
                    //return products;
                }
                else {
                    res.status(400).json({ error: "something went wrong" });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
        this.order_serv = new order_1.default();
        this.product_serv = new products_1.default();
        this.order_helper = new orderhelper_1.default();
    }
}
exports.default = orderServiceControllerClass;
