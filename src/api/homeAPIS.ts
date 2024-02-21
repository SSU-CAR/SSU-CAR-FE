import { axiosInstance } from "./instance";

//최근 주행 점수
export const homeScoreAPI = async () => {
  try {
    const response = await axiosInstance.get("/home/score");
    return response.data;
  } catch {
    return null;
  }
};

//최근 주행 피드백
export const homeFeedbackAPI = async () => {
  try {
    const response = await axiosInstance.get("/home/feedback");
    return response.data;
  } catch {
    return null;
  }
};
