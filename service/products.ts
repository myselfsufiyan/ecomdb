interface IProductService {
    
    create_product(myProductData: any): Promise<any>

    update_product(myProductData: any, id: string): Promise<any>

    delete_product(id: string): Promise<any>

    get_product(id: string): Promise<any>

    get_all_product(page: number, limit: number): Promise<any>

    search_product_by_name(name: string, oPage: number, lPage: number): Promise<any>
}

export default IProductService