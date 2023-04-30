interface IorderService {
    
    create_order(myorderData: any): Promise<any>

    get_order(id: string): Promise<any>

    get_all_order(page: number, limit: number): Promise<any>

}

export default IorderService