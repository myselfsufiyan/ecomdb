import users_repository from "../repository/user";
import userServiceImplClass from "../serviceImpl/user";
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

class userServiceControllerClass {

    user_serv: users_repository;

    constructor() {
        this.user_serv = new userServiceImplClass();
    }

    login_user = async (req: Request, res: Response): Promise<any> => {
        let { email, password } = req.body

        //console.log(email,password,"This is the credentials")
        if (email == null && password == null) {
            res.status(400).json({ error: "email or password not found" })
        } else {
            try {
                let response : any = await this.user_serv.get_user_by_email(email);
                if (response && (await bcrypt.compare(password,response.password))) {
                    // here we have to create the token
                    let token = jwt.sign({user_id:response.id,email:email}, "sufian",{expiresIn:"15min"});
                    if (token) {
                        res.status(200).json({ data: response,token:token })
                    } else {
                        res.status(400).json({ error: "Token is not created...." })
                    }
                } else {
                    res.status(400).json({ error: "Please Check the input field" });
                }
            } catch (error: any) {
                res.status(400).json({ error: error.message });
            }

        }
    }


    refreshToken = async (req:Request, res:Response):Promise<any> =>{
        // TODO: refresh token
    }

    create_user = async (req: Request, res: Response): Promise<any> => {
        let userData = req.body; //console.log this later...
        try {

            let salt = await bcrypt.genSalt(10);
            let pass = await bcrypt.hash(userData.password, salt);
            userData["password"] = pass;

            let response: any = await this.user_serv.create_user(userData);
            if (response == undefined || response.error) {
                res.status(response.status).json({ error: response.error })
            }
            else {
                res.status(200).json({ data: response, message: "User Has been Created........" })
            }
        } catch (error: any) {
            console.log(error);
            res.status(404).json({ error: error.message });
        }
    }

    update_user = async (req: Request, res: Response): Promise<any> => {

        let userData = req.body;
        let response :any = await this.user_serv.update_user(userData, req.params.id);
        if (response == undefined || response.error) {
            res.status(response.status).json({ error: response.error })
        }
        else {
            res.status(200).json({ data: response, message: "User Has been Created........" })
        }
    }


    delete_user = async (req: Request, res: Response): Promise<any> => {

        let response :any  = await this.user_serv.delete_user(req.params.id);
        if (response == undefined || response.error) {
            res.status(response.status).json({ error: response.error })
        }
        else {
            res.status(200).json({ data: response, message: "User Has been Created........" })
        }
    }


    get_user = async (req: Request, res: Response): Promise<any> => {

        let response :any = await this.user_serv.get_user(req.params.id);
        if (response == undefined || response.error) {
            res.status(response.status).json({ error: response.error })
        }
        else {
            res.status(200).json({ data: response, message: "User Has been Created........" })
        }
    }


    get_all_user = async (req: Request, res: Response): Promise<any> => {

        let page = req.query.page;
        let limit = req.query.limit;

        if (Number(page) == 0 || Number(limit) == 0) {
            page = String(1);
            limit = String(10);
        }

        let offset = (Number(page) - 1) * Number(limit);

        let response = await this.user_serv.get_all_user(offset, Number(limit));
        res.status(200).json({ data: response });
    }


    search_user_by_name = async (req: Request, res: Response): Promise<any> => {

        let page = req.query.oPage;
        let limit = req.query.lPage;
        let search = String(req.query.name);

        if (Number(page) == 0 || Number(limit) == 0) {
            page = String(1);
            limit = String(10);
        }

        let offset = (Number(page) - 1) * Number(limit);

        let response = await this.user_serv.search_user_by_name(search, offset, Number(limit));
        res.status(200).json({ data: response });

    }



}

export default userServiceControllerClass