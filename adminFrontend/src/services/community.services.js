import axios from "axios";
import { API_URL } from "../constants/urls";

const sendPost = data => {
  return axios.post(`${API_URL}/post`, data).then(response => {
    if (response.data) {
    }
    return response.data;
  });
};

const getPost = postId => {
  return axios.get(`${API_URL}/post/${postId}`).then(response => {
    return response.data;
  });
};

const getAllPost = () => {
  return axios.get(`${API_URL}/post`).then(response => {
    return response.data;
  });
};

const uploadPostMedia = data => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };

  return axios.post(`${API_URL}/media/upload`, data, config).then(response => {
    return response.data;
  });
};

const getPostLike = post_id => {
  return axios.get(`${API_URL}/post/${post_id}/like`).then(response => {
    return response.data;
  });
};

const getPostComment = post_id => {
  return axios.get(`${API_URL}/post/${post_id}/comment`).then(response => {
    return response.data;
  });
};

const savePostComment = FormData => {
  return axios.post(`${API_URL}/post/comment`, FormData).then(response => {
    return response.data;
  });
};

const postLike = FormData => {
  return axios.post(`${API_URL}/post/like`, FormData).then(response => {
    return response.data;
  });
};

const postService = {
  sendPost,
  getPost,
  getAllPost,
  uploadPostMedia,
  getPostComment,
  getPostLike,
  savePostComment,
  postLike
};

export default postService;
