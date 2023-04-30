import users_repository from "../repository/user";
import Iuser_service from "../service/user";

class UserServiceImplClass implements Iuser_service {
    user_repo: users_repository;

    constructor() {
        this.user_repo = new users_repository();
    }
    
    create_user = async (myuserData: any): Promise<any> => {
        return await this.user_repo.create_user(myuserData);
    }

    update_user = async (myuserData: any, id: string): Promise<any> => {
        return await this.user_repo.update_user(myuserData, id);
    }

    delete_user = async (id: string): Promise<any> => {
        return await this.user_repo.delete_user(id);
    }

    get_user_by_email = async(email: string): Promise<any> =>{
        return await this.user_repo.get_user_by_email(email);
    }

    get_user = async (id: string): Promise<any> => {
        return await this.user_repo.get_user(id);
    }

    get_all_user = async (page: number, limit: number): Promise<any> => {
        return await this.user_repo.get_all_user(page, limit);
    }

    search_user_by_name = async (name: string, oPage: number, lPage: number): Promise<any> => {
        return await this.user_repo.search_user_by_name(name, oPage, lPage);
    }

}

export default UserServiceImplClass;