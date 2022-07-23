//Login Server Link
export const LOGIN = "";

//SignUp Server link
export const SIGNUP = "";
// * Either use LogIn or Signup server URL
let con = false;

const SERVER_URL = con ? LOGIN : SIGNUP;

export default SERVER_URL;
