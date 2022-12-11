import {Request,Response,NextFunction} from "express";
import { decode } from "../utils/jwt.utils";

const deserializeUser =(req:Request,res:Response,next:NextFunction)=>{
        const token = req.headers['x-auth-token'] as string;
        
        const {decoded} = decode(token);
        if(decoded){
            req.user = decoded.userId;
            return next();
        }
        return next();       
}
export default deserializeUser;