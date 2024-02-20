import { axiosInstance } from "./instance";

export const historyAPI = async () => {
  try {
    const response = await axiosInstance.get("/history");
    return response.data;
  } catch {
    return null;
  }
};

export const historyDetailAPI = async (reportId: number) => {
  try {
    const response = await axiosInstance.get(`/history/${reportId}`);
    return response.data;
  } catch {
    return null;
  }
};
