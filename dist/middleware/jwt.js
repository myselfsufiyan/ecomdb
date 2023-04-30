"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function isAutheticated(req, res, next) {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            let token = req.headers.authorization.split(" ")[1];
            if (token) {
                let userData = jsonwebtoken_1.default.verify(token, "sufian");
                req.user = userData;
                next();
            }
            else {
                res.status(200).json({ message: "Please Login !!!!!" });
            }
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(400).json({ error: "Please Login" });
    }
}
exports.default = isAutheticated;
