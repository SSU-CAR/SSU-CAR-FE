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
