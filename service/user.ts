interface IUserService {
    
    create_user(myuserData: any): Promise<any>

    update_user(myuserData: any, id: string): Promise<any>

    delete_user(id: string): Promise<any>

    get_user(id: string): Promise<any>

    get_user_by_email (email:string):Promise<any>

    get_all_user(page: number, limit: number): Promise<any>

    search_user_by_name(name: string, oPage: number, lPage: number): Promise<any>
}

export default IUserService