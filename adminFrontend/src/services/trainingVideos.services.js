import axios from "axios";
import { API_URL } from "../constants/urls";

const getCategoryVideos = category => {
  return axios
    .get(`${API_URL}/get-category-videos/${category}`)
    .then(response => {
      return response.data;
    });
};

const getAllVideos = () => {
  return axios.get(`${API_URL}/get-Videos`).then(response => {
    return response.data;
  });
};

const trainingVideoService = {
  getAllVideos,
  getCategoryVideos
};

export default trainingVideoService;
