import { Express } from "express";
import productRoute from "./product.route";
import userRoute from "./user.route";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../utils/swagger.json';

export default function (app: Express) {
    app.use(userRoute());
    app.use(productRoute());
    app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
}