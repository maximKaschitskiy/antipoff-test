import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required")
    .min(2, "Too short login")
    .max(25, "Too long login"),
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("This field is required")
    .min(2, "Too short")
    .max(25, "Too long"),
  confirm: Yup.string()
    .required("This field is required")
    .min(2, "Too short")
    .max(25, "Too long")
    .oneOf([Yup.ref('password')], "Does not match")
});

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("This field is required")
    .min(2, "Too short")
    .max(25, "Too long"),
});

export { signUpSchema, signInSchema };