import { Router } from "express";
import { createProductHandler, deleteProductHandler, getAllProductsHandler } from "../controller/product.controller";
import { requiresUser, validate } from "../middleware";
import productCreateSchema from "../schema/product.schema";



export default function () {
    const router = Router();
    // create a product
    router.post("/api/product/create",[validate(productCreateSchema),requiresUser], createProductHandler);
    // fetech all prodcuts
    router.get("/api/product/all",getAllProductsHandler);
    // delete a product
    router.delete("/api/product/delete/:productId",requiresUser,deleteProductHandler);
    return router;
}