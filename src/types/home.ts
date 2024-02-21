import { ScenarioType } from "./driving";

interface ScoreType {
  reportId: number;
  score: number;
}
export interface LatestScoresType {
  latestScores: ScoreType[];
}

export interface HomeRecentType {
  recentRisks: ScenarioType[];
}
