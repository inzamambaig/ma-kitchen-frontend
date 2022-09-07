import { auth } from "../../config/routes";
// import wrapper from "../../api/api";
import axios from "axios";

const create = async ({
  firstname,
  lastname,
  email,
  password,
  confirmpass,
  countrycode,
  phone,
  kitchenname,
  employees,
  city,
  postalcode,
  state,
  country,
  address,
}) => {
  const { SIGNUP } = auth;

  const res = await axios.post(SIGNUP, {
    firstName: firstname,
    lastName: lastname,
    email: email,
    password: password,
    confirmPassword: confirmpass,
    phone: countrycode + phone,
    kitchenName: kitchenname,
    totalEmployees: employees,
    city: city,
    postalCode: postalcode,
    state: state,
    country: country,
    address: address,
  });

  if (res.data) {
    localStorage.setItem("chef", JSON.stringify(res.data));
  }

  return res.data;
};

const login = async ({ email, password }) => {
  const { LOGIN } = auth;

  const res = await axios.post(LOGIN, {
    email,
    password,
  });

  if (res.data) {
    localStorage.setItem("chef", JSON.stringify(res.data));
  }

  return res.data;
};

const logout = () => {
  localStorage.removeItem("chef");
};

const authService = {
  create,
  login,
  logout,
};

export default authService;
