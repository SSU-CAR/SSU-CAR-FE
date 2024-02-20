import { axiosInstance } from "./instance";

export const drivingStartAPI = async () => {
  try {
    const response = await axiosInstance.post("/driving/start");
    return response.data;
  } catch {
    return null;
  }
};

export const drivingEndAPI = async () => {
  try {
    const response = await axiosInstance.patch("/driving/end");
    return response.data;
  } catch {
    return null;
  }
};

export const drivingEndReportAPI = async (reportId: number) => {
  try {
    const response = await axiosInstance.get(`/driving/end/${reportId}`);
    return response.data;
  } catch {
    return null;
  }
};
