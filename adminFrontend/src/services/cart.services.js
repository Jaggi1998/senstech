import axios from "axios";
import { API_URL } from "../constants/urls";

const addToCart = data => {
  return axios.post(`${API_URL}/add-to-cart`, data).then(response => {
    return response.data;
  });
};
const getCart = userId => {
  return axios.get(`${API_URL}/get-cart/${userId}`).then(response => {
    return response.data;
  });
};
const deleteCart = userId => {
  return axios.delete(`${API_URL}/empty-cart/${userId}`).then(response => {
    return response.data;
  });
};

const CartService = {
  addToCart,
  getCart,
  deleteCart
};

export default CartService;
