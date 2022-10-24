import axios from "axios";

/*axios.defaults.headers.common = {
  Authorization: `bearer ${
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  }`,
};*/

export const getPhotos = async () => {
  try {
    const responseData = await axios.get("http://18.188.245.18/api/photos/", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return responseData.data.response;
  } catch (err) {
    console.log(err);
  }
};

export const uploadPhoto = async (obj, user_filename) => {
  try {
    console.log(obj.getAll("file"));
    const responseData = await axios.post(
      `http://18.188.245.18/api/photos/?user_filename=${user_filename}`,
      obj,
      {
        headers: {
          "Content-Type": "multipart/form-data;",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

export const loginRequest = async (obj) => {
  try {
    const responseData = await axios.post(
      "http://18.188.245.18/api/user/login/",
      obj
    );
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
