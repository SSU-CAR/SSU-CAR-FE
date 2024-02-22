import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://3.38.211.169:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
