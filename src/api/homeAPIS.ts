import { HomeRecentType, LatestScoresType } from "src/types/home";
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

export const homeLatestScoreAPI = async () => {
  try {
    const response = await axiosInstance.get("/home/latestScores");
    return response.data as LatestScoresType;
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

//주의해야 할 운전 습관
export const homeRecentsAPI = async () => {
  try {
    const response = await axiosInstance.get("/home/recentRisks");
    return response.data as HomeRecentType;
  } catch {
    return null;
  }
};
