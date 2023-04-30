import orders_repository from "../repository/order";
import orderServiceImplClass from "../serviceImpl/order";
import { Request, Response } from 'express';
import ProductServiceImplClass from "../serviceImpl/products";
import orderHelper from "../helper/orderhelper";

class orderServiceControllerClass {
    order_serv: orders_repository;
    product_serv: ProductServiceImplClass;
    order_helper: orderHelper;


    constructor() {
        this.order_serv = new orderServiceImplClass();
        this.product_serv = new ProductServiceImplClass();
        this.order_helper = new orderHelper();
    }

    create_order = async (req: Request, res: Response): Promise<any> => {
        let orderData = req.body; //console.log this later...
        // validate data here manually... using if else etc ...
        if (orderData) {
            let response: any = await this.order_serv.create_order(orderData);
            if (response) {
                res.status(200).json({ message: "The Order has successfully placed ", response: response });
            } else {
                res.status(400).json({ message_error: "Something went wrong please try again" });
            }
        } else {
            res.status(400).json({ message_error: "Something went wrong please try again" });
        }
    }


    get_order = async (req: Request, res: Response): Promise<any> => {

        let response = await this.order_serv.get_order(req.params.id);
        try {
            let resp = await this.order_helper.getOrderById(response);
            if (resp) {
                console.log(resp, "This is the resp...");
                res.status(200).json({ data: resp });
            } else {
                res.status(400).json({ error: "Something went wrong" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }

    }


    get_all_order = async (req: Request, res: Response): Promise<any> => {

        let products: any = []
        let data: any = []
        let page = req.query.page;
        let limit = req.query.limit;
        if (Number(page) == 0 || Number(limit) == 0) {
            page = String(1);
            limit = String(10);
        }
        let offset = (Number(page) - 1) * Number(limit);
        let response: any = await this.order_serv.get_all_order(offset, Number(limit));
        try {
            if (response) {
                for (let i = 0; i < response.rows.length; i++) {
                    console.log(response.rows.length, "This is the response ...");
                    for (let j = 0; j < response.rows[i].product_id.length; j++) {
                        products.push(await this.product_serv.get_product(response.rows[i].product_id[j]));
                    }
                    data.push({ count: response.count, rows: { id: response.rows[i].id, quantity: response.rows[i].quantity, totalprice: response.rows[i].totalprice, status: response.rows[i].status, user_id: response.rows[i].user_id, createdAt: response.rows[i].createdAt, updatedAt: response.rows[i].updatedAt, products: products } });
                }
                res.status(200).json({ data: data });
                //return products;
            } else {
                res.status(400).json({ error: "something went wrong" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }


    }



}

export default orderServiceControllerClass