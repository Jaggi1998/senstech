import axios from "axios";
import { API_URL } from "../constants/urls";

const getAllProducts = () => {
  return axios.get(`${API_URL}/get-products`).then(response => {
    return response.data;
  });
};

const ProductService = {
  getAllProducts
};

export default ProductService;