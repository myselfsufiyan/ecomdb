"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_1 = __importDefault(require("../controller/order"));
const jwt_1 = __importDefault(require("../middleware/jwt"));
const router = express_1.default.Router();
const pController = new order_1.default();
router.post("/createorders", jwt_1.default, pController.create_order);
router.get("/getorders/:id", jwt_1.default, pController.get_order);
router.get("/getAllorder", jwt_1.default, pController.get_all_order);
exports.default = router;
