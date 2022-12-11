import { Express } from "express";
import productRoute from "./product.route";
import userRoute from "./user.route";

export default function (app: Express) {
    app.use(userRoute());
    app.use(productRoute());
}