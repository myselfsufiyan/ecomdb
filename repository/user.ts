import { Op } from "sequelize";
import users from "../models/user";

class users_repository {
    constructor() {

    }

    public create_user = async (myuserData: any) => {
        return await users.create(myuserData);
    }

    public update_user = async (myuserData: any, id: string) => {
        return await users.update(myuserData, { where: { id: id } });
    }

    public delete_user = async (id: string) => {
        return await users.destroy({
            where: {
                id: id
            }
        });
    }

    public get_user = async (id: string) => {
        return await users.findByPk(id);
    }

    public get_user_by_email = async (email: string) => {
        return await users.findOne({
            where: {
                email: email
            }
        });
    }

    public get_all_user = async (page: number, limit: number) => {
        return await users.findAndCountAll({
            offset: page,
            limit: limit,
            order: [["createdAt", "desc"]]
        });
    }

    public search_user_by_name = async (name: string, oPage: number, lPage: number) => {
        return await users.findAndCountAll({
            where: {
                name: { [Op.iLike]: `%${name}%` },
                email: { [Op.iLike]: `%${name}%` }
            },
            offset: oPage,
            limit: lPage
        });
    }
}

export default users_repository;