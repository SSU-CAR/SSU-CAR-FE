import { ScenarioType } from "./driving";

interface ScoreType {
  reportId: number;
  score: number;
}
export interface LatestScoresType {
  scores: ScoreType[];
}

export interface HomeRecentType {
  recentRisks: ScenarioType[];
}
