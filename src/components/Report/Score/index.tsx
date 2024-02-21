import * as styles from "./Score.styles";
import { useState, useEffect } from "react";
import score_icon from "@assets/icons/score_icon.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChaingingProgressProvider";
import "react-circular-progressbar/dist/styles.css";
import { ScoreChart } from "./ScoreChart";
import { reportScoreAPI } from "@api/reportAPIS";

export const Score = () => {
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const response = reportScoreAPI();
    response.then((res) => {
      if (res.averageScore) setScore(res?.averageScore);
    });
  }, []);

  return (
    <styles.ScoreContainer>
      <styles.ScoreHeader>
        <img src={score_icon} alt="나의 운전 점수" />
        나의 운전 점수
      </styles.ScoreHeader>
      <styles.ScoreContents>
        <styles.ProgressbarContainer>
          <ChangingProgressProvider values={[0, score]}>
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${score}점`}
                className="progressbar"
                strokeWidth={8}
                styles={buildStyles({
                  pathColor: "#5F81FF",
                  trailColor: "#DFE8FF",
                  textColor: "#5F81FF",
                })}
              />
            )}
          </ChangingProgressProvider>
        </styles.ProgressbarContainer>
        <styles.LineChartContainer>
          <ScoreChart score={score} />
        </styles.LineChartContainer>
      </styles.ScoreContents>
    </styles.ScoreContainer>
  );
};
