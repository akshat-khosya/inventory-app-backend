import { WhereOptions } from "sequelize"
import log from "../lib/logger";
import Product, { ProductAttributes } from "../model/product.model";


const findOneProduct = async (query: WhereOptions<ProductAttributes>) => {
    try {
        const product = await Product.findOne({ where: query });
        return product;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

const findAllProduct = async (query: WhereOptions<ProductAttributes>) => {
    try {
        const product = await Product.findAll({ where: query });
        return product;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

const deleteOneProduct = async (query: WhereOptions<ProductAttributes>) => {
    try {
        const product = await Product.destroy({ where: query });
        return product;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

const createProduct = async (query: ProductAttributes) => {
    try {
        log.info(query);
        const product = await Product.create(query);
        return product;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export { findOneProduct, deleteOneProduct, createProduct ,findAllProduct};