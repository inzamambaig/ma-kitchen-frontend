import axios from "axios";

// API Configration for different services

// Getting JWT from localstorage
export const getJWT = () => {
  let homechef = localStorage.getItem("homechef-auth");

  if (homechef) {
    let token = localStorage.getItem(homechef.token);
    return token;
  } else {
    return null;
  }
};

export const TOKEN = getJWT();

// Preparing Auth and Checking if it is a file
const getOptions = (isFile) => {
  let options = {
    headers: {
      Authorization: `Bearer ${getJWT()}`,
    },
  };
  if (isFile) {
    options["headers"]["Content-Type"] = "multipart/form-data";
  }
  return options;
};

const prepareURL = (api, isCompleteURL, id) => {
  if (isCompleteURL) {
    return api;
  } else {
    return `${api}/${id}`;
  }
};

const wrapper = {
  get: (api, isCompleteURL = false, isFile = false) =>
    axios.get(prepareURL(api, isCompleteURL), getOptions(isFile)),
  post: (api, formData = {}, isFile = false, isCompleteURL = true, id = null) =>
    axios.post(
      prepareURL(api, isCompleteURL, id),
      formData,
      getOptions(isFile)
    ),
  put: (api, formData = {}, isFile = false, isCompleteURL = true) =>
    axios.put(prepareURL(api, isCompleteURL), formData, getOptions()),
  delete: (api, isFile = false, isCompleteURL = true) =>
    axios.delete(prepareURL(api, isCompleteURL), getOptions()),
};

export default wrapper;
