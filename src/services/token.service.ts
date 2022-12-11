import { createToken, deleteOneToken, findOneToken } from "../repo/token.repo"
import { createUser, findOneUser } from "../repo/user.repo";
import { v4 as uuidv4 } from 'uuid';
const saveOtp = async (otp: number, phone: string) => {
    try {
        let token = await findOneToken({ phoneNumber: phone });
        if (token) {
            await deleteOneToken({ phoneNumber: phone });
        }
        let newToken = await createToken({ phoneNumber: phone, otp: otp });
        return newToken;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

const verifyOtp = async (otp: number, phone: string) => {
    try {
        let token = await findOneToken({ phoneNumber: phone });
        if (!token) {
            return false;
        }
        if (token.otp === otp) {
            await deleteOneToken({ phoneNumber: phone });
            let user = await findOneUser({ phoneNumber: phone });
            
            if (!user) {
                let userId = uuidv4();
                let newUser = await createUser({phoneNumber: phone,userId:userId})
                return newUser;
            }
            return user;
        }
        return false;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
}

export { saveOtp, verifyOtp };