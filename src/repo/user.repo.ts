import { WhereOptions } from "sequelize"
import log from "../lib/logger";
import User, { UserAttributes } from "../model/user.model"

const findOneUser = async (query: WhereOptions<UserAttributes>) => {
    try {
        const otp = await User.findOne({ where: query });
        return otp;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

const deleteOneUser = async (query: WhereOptions<UserAttributes>) => {
    try {
        const otp = await User.destroy({ where: query });
        return otp;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

const createUser = async (query: UserAttributes) => {
    try {
        const otp = await User.create(query);
        return otp;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export { findOneUser, deleteOneUser, createUser };