import { axiosInstance } from "./instance";

const date = new Date();

/**
 * 간단 주행 이력 조회
 * /feedback/bio
 */
export const reportBioAPI = async () => {
  try {
    const response = await axiosInstance.post("/feedback/bio", {
      thisMonth: date.getMonth() + 1,
    });
    return response.data;
  } catch {
    return null;
  }
};

/**
 * 운전 점수 조회
 * /feedback/score
 */
export const reportScoreAPI = async () => {
  try {
    const response = await axiosInstance.post("/feedback/score", {
      thisMonth: date.getMonth() + 1,
    });
    return response.data;
  } catch {
    return null;
  }
};

/**
 * 이번달 주의 항목 - 상위 4개
 * /feedback/top4
 */
export const reportWarningAPI = async () => {
  try {
    const response = await axiosInstance.post("/feedback/top4", {
      thisMonth: date.getMonth() + 1,
    });
    return response.data;
  } catch {
    return null;
  }
};

/**
 * 이번달 주의 항목
 * /feedback/caution
 */
export const reportCautionAPI = async () => {
  try {
    const response = await axiosInstance.post("/feedback/caution", {
      thisMonth: date.getMonth() + 1,
    });
    return response.data;
  } catch {
    return null;
  }
};
