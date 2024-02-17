import styled from "styled-components";

export const ScoreContainer = styled.div`
  width: 100%;
  height: 215px;
  margin-top: 6px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScoreHeader = styled.div`
  width: 360px;
  margin: 18px 0;

  font-family: "Pretendard";
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray9};

  display: flex;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }
`;

export const ProgressbarContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 16px;
  font-weight: 600;
`;

export const LineChartContainer = styled.div`
  width: 250px;
`;
export const ScoreContents = styled.div`
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
