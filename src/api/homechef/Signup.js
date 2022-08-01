import { auth } from "../../config/routes";
import wrapper from "../../api/api";

const createChef = async (
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  phone,
  kitchenName,
  totalEmployees,
  city,
  postalcode,
  state,
  country,
  address
) => {
  const { SIGNUP } = auth;

  return await wrapper
    .post(SIGNUP, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone: phone,
      kitchenName: kitchenName,
      totalEmployees: totalEmployees,
      city: city,
      postalcode: postalcode,
      state: state,
      country: country,
      address: address,
    })
    .then((res) => res)
    .catch((err) => err);
};

export default createChef;
