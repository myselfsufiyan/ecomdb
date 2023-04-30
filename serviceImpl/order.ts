import orders_repository from "../repository/order";
import Iorder_service from "../service/order";
import ProductServiceImplClass from "./products";
class orderServiceImplClass implements Iorder_service {
    order_repo: orders_repository;
    product_repo: ProductServiceImplClass;

    constructor() {
        this.order_repo = new orders_repository();
        this.product_repo = new ProductServiceImplClass()
    }

    create_order = async (myorderData: any): Promise<any> => {
        return await this.order_repo.create_order(myorderData);
    }

    get_order = async (id: string): Promise<any> => {
        return await this.order_repo.get_order(id);
    }

    get_all_order = async (page: number, limit: number): Promise<any> => {
        let response :any =  await this.order_repo.get_all_order(page, limit);
        return response;
    }


}

export default orderServiceImplClass