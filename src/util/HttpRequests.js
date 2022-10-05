import axios from "axios";
export const loginRequest = async (obj) => {
  try {
    const responseData = await axios.post(
      "http://18.188.245.18/api/user/login/",
      obj
    );
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

export const registerRequest = async (obj) => {
  try {
    const responseData = await axios.post(
      "http://18.188.245.18/api/user/register/",
      obj
    );
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
