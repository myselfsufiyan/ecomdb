"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../controller/user"));
const jwt_1 = __importDefault(require("../middleware/jwt"));
const router = express_1.default.Router();
const pController = new user_1.default();
router.post("/createusers", pController.create_user);
router.post("/loginuser", pController.login_user);
router.put("/updateusers/:id", jwt_1.default, pController.update_user);
router.get("/getusers/:id", jwt_1.default, pController.get_user);
router.get("/getAlluser", jwt_1.default, pController.get_all_user);
router.get("/searchuserByName", jwt_1.default, pController.search_user_by_name);
router.delete("/deleteusers/:id", jwt_1.default, pController.delete_user);
exports.default = router;
