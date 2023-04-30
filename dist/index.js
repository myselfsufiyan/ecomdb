"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const products_1 = __importDefault(require("./routes/products"));
const user_1 = __importDefault(require("./routes/user"));
const order_1 = __importDefault(require("./routes/order"));
const app = (0, express_1.default)();
const port = 8080;
database_1.default.sync();
database_1.default.authenticate().then(() => { console.log('db connected'); }).catch((err) => { `error ${err}`; });
dotenv_1.default.config();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: ['localhost:8080'] }));
const association_1 = __importDefault(require("./models/association"));
(0, association_1.default)();
// app.get("/index", (req, res) => {
//     res.status(200).json('Index Page');
// });
app.use("/product", products_1.default);
app.use("/user", user_1.default);
app.use("/order", order_1.default);
app.listen(port, () => {
    console.log(`application port is ${port}`);
});
