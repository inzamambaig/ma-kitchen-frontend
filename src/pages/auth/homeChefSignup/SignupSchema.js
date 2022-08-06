import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("firstname is Required"),
  lastname: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("lastname is Required"),
  email: Yup.string().email("Invalid email").required(" Email is Required"),
  password: Yup.string()
    .min(7, "Password is too Short!")
    .required("password is Required"),
  confirmpass: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  phone: Yup.string()
    .min(7, "Too Short!")
    .max(30, "Too Long!")
    .required("Phone is required"),
  kitchenname: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required(" Add Kitchen Name"),
  employees: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Add Employees Name"),
  city: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required(" Add Kitchen Name"),
  postalcode: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Add Employees Name"),
  state: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Add state Name"),
  country: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Add state Name"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Address is Required"),
});
