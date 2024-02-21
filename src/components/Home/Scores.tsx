import styled from "styled-components";
import ChangingProgressProvider from "@components/Report/Score/ChaingingProgressProvider";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CurrentScoreChart } from "./CurrentScoreChart";

export const Scores = () => {
  return (
    <ScoresContainer>
      <ScoresHeader>나의 운전 점수</ScoresHeader>
      <ScoreContents>
        <ProgressbarContainer>
          <ChangingProgressProvider values={[0, 80]}>
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`80점`}
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
        </ProgressbarContainer>
        <ChartContainer>
          <div>최근 3회 주행 기록</div>
          <CurrentScoreChart />
        </ChartContainer>
      </ScoreContents>
    </ScoresContainer>
  );
};

const ScoresContainer = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 66px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScoresHeader = styled.div`
  width: 360px;
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.blue600};
  margin: 20px 0;
`;

const ScoreContents = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-around;
`;

const ProgressbarContainer = styled.div`
  width: 90px;
  height: 90px;
  font-weight: 600;
`;

const ChartContainer = styled.div`
  width: 200px;
  div {
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    margin-left: 20px;
    color: ${({ theme }) => theme.colors.blue700};
  }
`;
