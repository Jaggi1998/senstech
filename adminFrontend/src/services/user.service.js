import axios from "axios";
import { API_URL } from "../constants/urls";

const getUsers = () => {
  return axios.get(`${API_URL}/users`).then(response => {
    return response.data;
  });
};

const deleteUser = userId => {
  return axios.patch(`${API_URL}/delete-user/${userId}`).then(response => {
    return response.data;
  });
};

const userService = {
  getUsers,
  deleteUser
};

export default userService;
