import { WhereOptions } from "sequelize"
import log from "../lib/logger";
import Token, { TokenAttributes } from "../model/token.model"

const findOneToken = async (query: WhereOptions<TokenAttributes>) => {
    try {
        const otp = await Token.findOne({ where: query });
        return otp;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

const deleteOneToken = async (query: WhereOptions<TokenAttributes>) => {
    try {
        const otp = await Token.destroy({ where: query });
        return otp;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

const createToken = async (token: TokenAttributes) => {
    try {
        const otp = await Token.create(token);
        return otp;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export { findOneToken, deleteOneToken, createToken };