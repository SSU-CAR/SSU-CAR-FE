//주행 기록 전체 조회 /history
export interface ReportHistoryType {
  reportId: number;
  departuredAt: string;
  arrivedAt: string;
  mileage: string;
  score: string;
}
