import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com", // base API URL
});

export default api;
