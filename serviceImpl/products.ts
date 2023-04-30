import products_repository from "../repository/products";
import Iproduct_service from "../service/products";

class ProductServiceImplClass implements Iproduct_service {
    product_repo: products_repository;

    constructor() {
        this.product_repo = new products_repository();
    }

    create_product = async (myProductData: any): Promise<any> => {
        return await this.product_repo.create_product(myProductData);
    }

    update_product = async (myProductData: any, id: string): Promise<any> => {
        return await this.product_repo.update_product(myProductData, id);
    }

    delete_product = async (id: string): Promise<any> => {
        return await this.product_repo.delete_product(id);
    }

    get_product = async (id: string): Promise<any> => {
        return await this.product_repo.get_product(id);
    }

    get_all_product = async (page: number, limit: number): Promise<any> => {
        return await this.product_repo.get_all_product(page, limit);
    }

    search_product_by_name = async (name: string, oPage: number, lPage: number): Promise<any> => {
        return await this.product_repo.search_product_by_name(name, oPage, lPage);
    }

}

export default ProductServiceImplClass