import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface User {
    id: string
    email: string
}

declare global {
    namespace Express {
        interface Request {
            user ? : User
        }
    }
}

export default function isAutheticated(req: Request, res: Response, next: NextFunction) {

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            let token = req.headers.authorization.split(" ")[1];
            if (token) {
                let userData = jwt.verify(token, "sufian" as any) as User;
                req.user = userData;
                next();
            } else {
                res.status(200).json({ message: "Please Login !!!!!" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    } else {
        res.status(400).json({ error: "Please Login" })
    }
}