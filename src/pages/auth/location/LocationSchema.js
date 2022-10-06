import * as Yup from "yup";

export const LocationSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is Required"),
});
