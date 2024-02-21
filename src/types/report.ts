import { ScenarioType } from "./driving";

/**
 * 주행 기록 전체 조회
 * /history
 */
export interface ReportHistoryType {
  reportId: number;
  departuredAt: string;
  arrivedAt: string;
  mileage: string;
  score: string;
}

/**
 * 주행 기록 상세 조회
 * /history/${reportId}
 */
export interface ReportDetailType {
  scenarioType: number;
  scenarioName: string;
  total: number;
}

/**
 * 간단 주행 이력 조회
 * /report/bio
 */
export interface BioType {
  monthlyMileage: string;
  totalMileage: string;
  latestDeparture: string;
  latestArrival: string;
}

/**
 * 나의 안전 점수 조회
 * /report/monthly
 */
export interface MonthlyScoreType {
  averageScore: number;
  month1: number;
  month2: number;
  month3: number;
  month4: number;
  month5: number;
  month6: number;
}

/**
 * 이번달 주의 항목
 * /feedback/caution
 */
export interface ReportCautionType {
  internalSummaries: ScenarioType[];
  externalSummaries: ScenarioType[];
}
