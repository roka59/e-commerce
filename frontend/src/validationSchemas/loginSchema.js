import * as yup from "yup";
const loginSchema = yup
    .object({
        email: yup.string().email("Invalid email address").required("Email is required"),
        password: yup.string().required("Password is required")
    }).required();
export default loginSchema;