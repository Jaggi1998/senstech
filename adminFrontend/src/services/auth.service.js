import axios from "axios";
import { API_URL } from "../constants/urls";

const login = (email, password) => {
  return axios
    .post(API_URL + "/users/login", {
      email,
      password
    })
    .then(response => {
      if (response.data.isAuth) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout
};

export default authService;
