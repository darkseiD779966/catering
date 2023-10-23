import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(5).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  tel: Yup.number().min(10).required("Please enter your phone number"),
  message: Yup.string().min(25).required("Please enter the message")
});