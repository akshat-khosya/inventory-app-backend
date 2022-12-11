import { Request, Response } from "express"
import otpGenerator from 'otp-generator'
import log from "../lib/logger";
import sms from "../lib/Twilio";
import { saveOtp, verifyOtp } from "../services/token.service";
import { sign } from "../utils/jwt.utils";


const requestOtpHandler = async (req: Request, res: Response) => {
    try {
        const { phone } = req.body as { phone: string };
        // genrate otp and send it to the user
        let otp = parseInt(otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false, digits: true }));
        log.info(otp);
        // await sms.sendSMS(phone, otp);
        // save the otp in the database
        let token = await saveOtp(otp, phone);
        // return the response
        return res.status(200).send({ message: "OTP sent successfully" });
    } catch (error) {
        log.error(error);
        return res.status(500).send({ message: (error as Error).message });
    }
}

const verifyOtpHandler = async (req: Request, res: Response) => {
    try {
        const { phone, otp } = req.body as { phone: string, otp: number };
        // verify the otp
        let token = await verifyOtp(otp, phone);
        // return the response
        if (!token) {
            return res.status(400).send({ message: "Invalid OTP" });
        }
        // create jwt token
        let jwtToken = sign({ userId: token.userId}, { expiresIn: "1h" });
        return res.status(200).send({ message: "OTP verified successfully",token:jwtToken});
    } catch (error) {
        log.error(error);
        return res.status(500).send({ message: (error as Error).message });
    }
}

export { requestOtpHandler,verifyOtpHandler};