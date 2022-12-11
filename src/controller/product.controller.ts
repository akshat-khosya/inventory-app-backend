import {Request,Response} from "express";
import { createProduct, findAllProduct, findOneProduct } from "../repo/product.repo";
import { v4 as uuidv4 } from 'uuid';
import log from "../lib/logger";


const createProductHandler = async (req: Request, res: Response) => {
    try {
        let productId = uuidv4();
        let product = await createProduct({...req.body,productOwner:req.user,productId});
        return res.status(200).json({product});
    } catch (error) {
        log.error(error);
        return res.status(500).json({ error: (error as Error).message });
    }
}
const getAllProductsHandler = async (req: Request, res: Response) => {
    try {
        let prodcuts = await findAllProduct({});
        return res.status(200).json({prodcuts});
    } catch (error) {
        log.error(error);
        return res.status(500).json({ error: (error as Error).message });
    }
}

const deleteProductHandler = async (req: Request, res: Response) => {
    try {
        let productId = req.params.productId;
        let prodcuts = await findOneProduct({productId});
        if(!prodcuts){
            return res.status(400).json({ error: "Product not found" });
        }
        if(prodcuts.productOwner !== req.user){
            return res.status(400).json({ error: "You are not the owner of this product" });
        }
        await prodcuts.destroy();
        return res.status(200).json({message:"Product deleted successfully"});
    } catch (error) {
        log.error(error);
        return res.status(500).json({ error: (error as Error).message });
    }
}

export {createProductHandler,getAllProductsHandler,deleteProductHandler}