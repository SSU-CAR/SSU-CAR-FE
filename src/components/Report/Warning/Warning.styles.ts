import styled from "styled-components";

export const WarningContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 6px;

  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WarningHeader = styled.div`
  width: 360px;
  margin: 20px 0;

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

export const DoughnutContents = styled.div`
  display: flex;
  align-items: center;
`;

export const DoughnutChartContainer = styled.div`
  width: 150px;
  margin-right: 22px;
`;

export const DoughnutItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
`;

export const DoughnutItem = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray8};

  display: flex;
  margin: 8px 0;
`;

export const ColorMark = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  background-color: ${(props) => props.color};
  margin-right: 6px;
`;
