import axios from "axios";

const API = axios.create({
  baseURL: "https://coopers-todo-app-backend-aea72035cd97.herokuapp.com/api",
});

// Function to set token for all requests
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
