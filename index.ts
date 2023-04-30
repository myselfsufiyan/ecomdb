import express from 'express';
import db from './config/database';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import productRouter from './routes/products';
import userRouter from './routes/user';
import orderRouter from './routes/order'

const app = express();
const port = 8080;

db.sync();
db.authenticate().then(() => { console.log('db connected') }).catch((err) => { `error ${err}` });

dotenv.config();
app.use(bodyParser.json());
app.use(cors({ origin: ['localhost:8080'] }));

import MyAssociations from './models/association';
MyAssociations()


// app.get("/index", (req, res) => {
//     res.status(200).json('Index Page');
// });

app.use("/product", productRouter);
app.use("/user",userRouter)
app.use("/order",orderRouter)

app.listen(port, () => {
    console.log(`application port is ${port}`);
});