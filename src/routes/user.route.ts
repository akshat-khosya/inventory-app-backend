import { Router } from "express";
import { autologinHandler, requestOtpHandler, verifyOtpHandler } from "../controller/user.controller";
import { requiresUser, validate } from "../middleware";
import { otpCreateSchema, otpVerifySchema } from "../schema/user.schema";


export default function () {
    const router = Router();
    // Request OTP 
    router.post('/api/user/reqotp', validate(otpCreateSchema), requestOtpHandler);
    // Verify OTP
    router.post('/api/user/verifyotp', validate(otpVerifySchema), verifyOtpHandler);
    // auto login
    router.get('/api/user/autologin',requiresUser,autologinHandler);
    
    return router;
}