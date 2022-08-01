import wrapper from "../api";
import { auth } from "../../config/routes";

const Signup = async (
  firstname,
  lastname,
  email,
  password,
  confirmpass,
  employees,
  kitchenname,
  city,
  state,
  postalcode,
  address,
  country
) => {
  return await wrapper
    .post(auth.SIGNUP, {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      confirmpass: confirmpass,
      employees: employees,
      kitchenname: kitchenname,
      city: city,
      state: state,
      postalcode: postalcode,
      address: address,
      country: country,
    })
    .then((res) => res)
    .catch((err) => console.log(err));
};

export default Signup;
