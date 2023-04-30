import products_repository from "../repository/products";
import ProductServiceImplClass from "../serviceImpl/products";
import { Request, Response } from 'express';
import orderServiceImplClass from "../serviceImpl/order";
class ProductServiceControllerClass {

    product_serv: products_repository;
    order_serv: orderServiceImplClass;

    constructor() {
        this.product_serv = new ProductServiceImplClass();
        this.order_serv = new orderServiceImplClass()
    }

    create_product = async (req: Request, res: Response): Promise<any> => {
        let productData = req.body;
        let response = await this.product_serv.create_product(productData);
        if (response) {
            res.status(200).json({ data: response });
        } else {
            res.status(400).json({ error: "Something went wrong" });
        }

    }

    update_product = async (req: Request, res: Response): Promise<any> => {

        let productData = req.body;
        let response = await this.product_serv.update_product(productData, req.params.id);
        if (response) {
            res.status(200).json({ data: response });
        } else {
            res.status(400).json({ error: "Something went wrong" });
        }
    }


    delete_product = async (req: Request, res: Response): Promise<any> => {

        let response = await this.product_serv.delete_product(req.params.id);
        if (response) {
            res.status(200).json({ data: response });
        } else {
            res.status(400).json({ error: "Something went wrong" });
        }
    }


    get_product = async (req: Request, res: Response): Promise<any> => {

        let response = await this.product_serv.get_product(req.params.id);
        if (response) {
            res.status(200).json({ data: response });
        } else {
            res.status(400).json({ error: "Something went wrong" });
        }
    }


    get_all_product = async (req: Request, res: Response): Promise<any> => {

        let page = req.query.page;
        let limit = req.query.limit;

        if (Number(page) == 0 || Number(limit) == 0) {
            page = String(1);
            limit = String(10);
        }

        let offset = (Number(page) - 1) * Number(limit);
        try {
            let response: any = await this.product_serv.get_all_product(offset, Number(limit));
            if (response) {
                res.status(200).json({ products: response });
            } else {
                res.status(400).json({ error: "Something went wrong" });
            }
        } catch (error: any) {
            console.log(error);
            res.status(200).json({ error: error.message });
        }

    }


    search_product_by_name = async (req: Request, res: Response): Promise<any> => {

        let page = req.query.oPage;
        let limit = req.query.lPage;
        let search = String(req.query.name);

        if (Number(page) == 0 || Number(limit) == 0) {
            page = String(1);
            limit = String(10);
        }

        let offset = (Number(page) - 1) * Number(limit);

        let response = await this.product_serv.search_product_by_name(search, offset, Number(limit));
        if (response) {
            res.status(200).json({ data: response });
        } else {
            res.status(200).json({ error: "Something went wrong" });
        }
        res.status(200).json({ data: response });

    }

}

export default ProductServiceControllerClass