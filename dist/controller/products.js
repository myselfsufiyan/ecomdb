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
const products_1 = __importDefault(require("../serviceImpl/products"));
const order_1 = __importDefault(require("../serviceImpl/order"));
class ProductServiceControllerClass {
    constructor() {
        this.create_product = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let productData = req.body;
            let response = yield this.product_serv.create_product(productData);
            if (response) {
                res.status(200).json({ data: response });
            }
            else {
                res.status(400).json({ error: "Something went wrong" });
            }
        });
        this.update_product = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let productData = req.body;
            let response = yield this.product_serv.update_product(productData, req.params.id);
            if (response) {
                res.status(200).json({ data: response });
            }
            else {
                res.status(400).json({ error: "Something went wrong" });
            }
        });
        this.delete_product = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.product_serv.delete_product(req.params.id);
            if (response) {
                res.status(200).json({ data: response });
            }
            else {
                res.status(400).json({ error: "Something went wrong" });
            }
        });
        this.get_product = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.product_serv.get_product(req.params.id);
            if (response) {
                res.status(200).json({ data: response });
            }
            else {
                res.status(400).json({ error: "Something went wrong" });
            }
        });
        this.get_all_product = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let page = req.query.page;
            let limit = req.query.limit;
            if (Number(page) == 0 || Number(limit) == 0) {
                page = String(1);
                limit = String(10);
            }
            let offset = (Number(page) - 1) * Number(limit);
            try {
                let response = yield this.product_serv.get_all_product(offset, Number(limit));
                if (response) {
                    res.status(200).json({ products: response });
                }
                else {
                    res.status(400).json({ error: "Something went wrong" });
                }
            }
            catch (error) {
                console.log(error);
                res.status(200).json({ error: error.message });
            }
        });
        this.search_product_by_name = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let page = req.query.oPage;
            let limit = req.query.lPage;
            let search = String(req.query.name);
            if (Number(page) == 0 || Number(limit) == 0) {
                page = String(1);
                limit = String(10);
            }
            let offset = (Number(page) - 1) * Number(limit);
            let response = yield this.product_serv.search_product_by_name(search, offset, Number(limit));
            if (response) {
                res.status(200).json({ data: response });
            }
            else {
                res.status(200).json({ error: "Something went wrong" });
            }
            res.status(200).json({ data: response });
        });
        this.product_serv = new products_1.default();
        this.order_serv = new order_1.default();
    }
}
exports.default = ProductServiceControllerClass;
