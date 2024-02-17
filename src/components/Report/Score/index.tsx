import * as styles from "./Score.styles";
import { useState, useEffect } from "react";
import { MonthlyScoreType } from "src/types/report";
import score_icon from "@assets/icons/score_icon.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChaingingProgressProvider";
import "react-circular-progressbar/dist/styles.css";
import { ScoreChart } from "./ScoreChart";

const score = {
  averageScore: 75,
  month1: 45,
  month2: 50,
  month3: 60,
  month4: 70,
  month5: 65,
  month6: 80,
};
export const Score = () => {
  const [data, setData] = useState<MonthlyScoreType>({
    averageScore: 0,
    month1: 0,
    month2: 0,
    month3: 0,
    month4: 0,
    month5: 0,
    month6: 0,
  });
  const months = [
    data.month6,
    data.month5,
    data.month4,
    data.month3,
    data.month2,
    data.month1,
  ];

  useEffect(() => {
    //TODO: API 연결
    setData(score);
  }, []);

  return (
    <styles.ScoreContainer>
      <styles.ScoreHeader>
        <img src={score_icon} alt="나의 운전 점수" />
        나의 운전 점수
      </styles.ScoreHeader>
      <styles.ScoreContents>
        <styles.ProgressbarContainer>
          <ChangingProgressProvider values={[0, data.averageScore]}>
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${data.averageScore}점`}
                className="progressbar"
                strokeWidth={8}
              />
            )}
          </ChangingProgressProvider>
        </styles.ProgressbarContainer>
        <styles.LineChartContainer>
          <ScoreChart months={months} />
        </styles.LineChartContainer>
      </styles.ScoreContents>
    </styles.ScoreContainer>
  );
};
