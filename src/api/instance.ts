import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://15.164.253.57:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
