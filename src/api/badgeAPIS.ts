import { axiosInstance } from "./instance";

export const badgeAPI = async () => {
  try {
    const response = await axiosInstance.get("/badge");
    return response.data;
  } catch {
    return null;
  }
};
