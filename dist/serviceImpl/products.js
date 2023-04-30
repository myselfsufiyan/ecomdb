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
const products_1 = __importDefault(require("../repository/products"));
class ProductServiceImplClass {
    constructor() {
        this.create_product = (myProductData) => __awaiter(this, void 0, void 0, function* () {
            return yield this.product_repo.create_product(myProductData);
        });
        this.update_product = (myProductData, id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.product_repo.update_product(myProductData, id);
        });
        this.delete_product = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.product_repo.delete_product(id);
        });
        this.get_product = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.product_repo.get_product(id);
        });
        this.get_all_product = (page, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield this.product_repo.get_all_product(page, limit);
        });
        this.search_product_by_name = (name, oPage, lPage) => __awaiter(this, void 0, void 0, function* () {
            return yield this.product_repo.search_product_by_name(name, oPage, lPage);
        });
        this.product_repo = new products_1.default();
    }
}
exports.default = ProductServiceImplClass;
