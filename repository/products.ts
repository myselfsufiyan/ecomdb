import { Op } from "sequelize";
import products from "../models/products";
import orders from "../models/order";

class products_repository {
    constructor() { 
        
    }

    public create_product = async (myProductData: any) => {
        return await products.create(myProductData);
    }

    public update_product = async (myProductData: any, id: string) => {
        return await products.update(myProductData, { where: { id: id } });
    }

    public delete_product = async (id: string) => {
        return await products.destroy({
            where: {
                id: id
            }
        });
    }

    public get_product = async (id: string) => {
        return await products.findByPk(id);
    }

    public get_all_product = async (page: number, limit: number) => {
        return await products.findAndCountAll({
            offset: page,
            limit: limit,
            order: [["createdAt", "DESC"]],
        });
    }

    public search_product_by_name = async (name: string, oPage: number, lPage: number) => {
        return await products.findAndCountAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            },
            offset: oPage,
            limit: lPage
        });
    }
}

export default products_repository;