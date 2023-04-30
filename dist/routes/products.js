"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("../controller/products"));
const jwt_1 = __importDefault(require("../middleware/jwt"));
const router = express_1.default.Router();
const pController = new products_1.default();
router.post("/createProducts", jwt_1.default, pController.create_product);
router.put("/updateProducts/:id", jwt_1.default, pController.update_product);
router.get("/getProducts/:id", jwt_1.default, pController.get_product);
router.get("/getAllProduct", jwt_1.default, pController.get_all_product);
router.get("/searchProductByName", jwt_1.default, pController.search_product_by_name);
router.delete("/deleteProducts/:id", jwt_1.default, pController.delete_product);
exports.default = router;
