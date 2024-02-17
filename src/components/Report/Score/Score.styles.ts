import styled from "styled-components";

export const ScoreContainer = styled.div`
  width: 100%;
  height: 200px;
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
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray9};

  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
`;

export const ProgressbarContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 20px;
`;

export const ScoreContents = styled.div`
  width: 360px;
`;
