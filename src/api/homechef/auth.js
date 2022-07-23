import { auth } from "../../config/routes";
import wrapper from "../../api/api";

const validateChef = async (email, password) => {
  const { LOGIN } = auth;
  // console.log(LOGIN);
  return await wrapper
    .post(LOGIN, { email, password })
    .then((res) => {
      if (res === undefined) {
        return null;
      }

      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default validateChef;
