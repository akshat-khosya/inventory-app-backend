import { object, string, ref, number } from "yup";

// productCreateSchema = {
//     reqType: "POST",
//     reqPath: "/api/product/create",
// }

const productCreateSchema = object({
    body: object({
        name: string().required("Product name is required"),
        url: string(),
        description: string().required("Product description is required"),
    }),
    headers: object({
        "content-type": string().required()
            .equals(["application/json"]),
    })
})

export default productCreateSchema;