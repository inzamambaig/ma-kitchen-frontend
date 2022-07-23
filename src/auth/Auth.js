// import wrapper from "../api";
import { HOMECHEF } from "../routes/Routes";

export async function validateUser(username, password) {
  const { LOGIN } = HOMECHEF;
  return await wrapper
    .post(LOGIN, { email: username, password: password })
    .then((res) => {
      const data = res.data;
      if (res === undefined) {
        return 0;
      }
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
