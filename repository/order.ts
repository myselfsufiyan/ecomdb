import orders from "../models/order";
import products from "../models/products";
 
class orders_repository {
    constructor() { 
        
    }

    public create_order = async (myorderData: any) => {
        return await orders.create(myorderData);
    }

    public get_order = async (id: string) => {
        return await orders.findByPk(id,{
            include:[{model:products,duplicating:false}],
        });
    }

    public get_all_order = async (page: number, limit: number) => {
        return await orders.findAndCountAll({
            offset: page,
            limit: limit,
            order: [["createdAt", "DESC"]],
            include:[{model:products,duplicating:false}],
            distinct:true,
        });
    }

}

export default orders_repository;