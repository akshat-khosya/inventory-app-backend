import { object, string, ref, number } from "yup";

// otpCreateSchema = {
//     reqType: "POST",
//     reqPath: "/api/user/reqotp",
// }

const otpCreateSchema = object({
    body: object({
        phone: string().required("Phone number is required")
            .matches(/^[0-9]+$/, "Phone number should be only digits")
    }),
    headers: object({
        "content-type": string().required()
            .equals(["application/json"]),
    })
})
// otpVerifySchema = {
//     reqType: "POST",
//     reqPath: "/api/user/verifyotp",
// }
const otpVerifySchema = object({
    body: object({
        phone: string().required("Phone number is required")
            .matches(/^[0-9]+$/, "Phone number should be only digits"),
        otp: number().required("OTP is required")

    }),
    headers: object({
        "content-type": string().required()
            .equals(["application/json"]),
    })
})

export { otpCreateSchema, otpVerifySchema };