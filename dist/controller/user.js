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
const user_1 = __importDefault(require("../serviceImpl/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class userServiceControllerClass {
    constructor() {
        this.login_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { email, password } = req.body;
            //console.log(email,password,"This is the credentials")
            if (email == null && password == null) {
                res.status(400).json({ error: "email or password not found" });
            }
            else {
                try {
                    let response = yield this.user_serv.get_user_by_email(email);
                    if (response && (yield bcryptjs_1.default.compare(password, response.password))) {
                        // here we have to create the token
                        let token = jsonwebtoken_1.default.sign({ user_id: response.id, email: email }, "sufian", { expiresIn: "15min" });
                        if (token) {
                            res.status(200).json({ data: response, token: token });
                        }
                        else {
                            res.status(400).json({ error: "Token is not created...." });
                        }
                    }
                    else {
                        res.status(400).json({ error: "Please Check the input field" });
                    }
                }
                catch (error) {
                    res.status(400).json({ error: error.message });
                }
            }
        });
        this.refreshToken = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // TODO: refresh token
        });
        this.create_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let userData = req.body; //console.log this later...
            try {
                let salt = yield bcryptjs_1.default.genSalt(10);
                let pass = yield bcryptjs_1.default.hash(userData.password, salt);
                userData["password"] = pass;
                let response = yield this.user_serv.create_user(userData);
                if (response == undefined || response.error) {
                    res.status(response.status).json({ error: response.error });
                }
                else {
                    res.status(200).json({ data: response, message: "User Has been Created........" });
                }
            }
            catch (error) {
                console.log(error);
                res.status(404).json({ error: error.message });
            }
        });
        this.update_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let userData = req.body;
            let response = yield this.user_serv.update_user(userData, req.params.id);
            if (response == undefined || response.error) {
                res.status(response.status).json({ error: response.error });
            }
            else {
                res.status(200).json({ data: response, message: "User Has been Created........" });
            }
        });
        this.delete_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.user_serv.delete_user(req.params.id);
            if (response == undefined || response.error) {
                res.status(response.status).json({ error: response.error });
            }
            else {
                res.status(200).json({ data: response, message: "User Has been Created........" });
            }
        });
        this.get_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.user_serv.get_user(req.params.id);
            if (response == undefined || response.error) {
                res.status(response.status).json({ error: response.error });
            }
            else {
                res.status(200).json({ data: response, message: "User Has been Created........" });
            }
        });
        this.get_all_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let page = req.query.page;
            let limit = req.query.limit;
            if (Number(page) == 0 || Number(limit) == 0) {
                page = String(1);
                limit = String(10);
            }
            let offset = (Number(page) - 1) * Number(limit);
            let response = yield this.user_serv.get_all_user(offset, Number(limit));
            res.status(200).json({ data: response });
        });
        this.search_user_by_name = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let page = req.query.oPage;
            let limit = req.query.lPage;
            let search = String(req.query.name);
            if (Number(page) == 0 || Number(limit) == 0) {
                page = String(1);
                limit = String(10);
            }
            let offset = (Number(page) - 1) * Number(limit);
            let response = yield this.user_serv.search_user_by_name(search, offset, Number(limit));
            res.status(200).json({ data: response });
        });
        this.user_serv = new user_1.default();
    }
}
exports.default = userServiceControllerClass;
