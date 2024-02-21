/**
 * 주행 후 상세 기록
 * /driving/end/${reportID}
 */

export interface ScenarioType {
  scenarioType: number;
  scenarioName: string;
  scenarioCount: number;
}
export interface DrivingEndType {
  reportId: number;
  departuredAt: string;
  arrivedAt: string;
  mileage: number;
  score: number;
  scoreComment: string;
  internalSummaries: ScenarioType[];
  externalSummaries: ScenarioType[];
}
