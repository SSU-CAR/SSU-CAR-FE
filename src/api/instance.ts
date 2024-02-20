import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://13.209.80.41:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
