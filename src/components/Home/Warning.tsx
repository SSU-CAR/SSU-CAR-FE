import styled from "styled-components";
import info_icon from "@assets/icons/info_icon.svg";
import { homeRecentsAPI } from "@api/homeAPIS";
import { useState, useEffect } from "react";
import { ScenarioType } from "src/types/driving";

export const Warning = () => {
  const [data, setData] = useState<ScenarioType[]>();

  useEffect(() => {
    const response = homeRecentsAPI();
    response.then((res) => {
      if (res) setData(res?.recentRisks);
    });
  }, []);

  return (
    <WarningContainer>
      <WarningContents>
        <WarningHeader>주의해야 할 운전 습관</WarningHeader>
        <InfoText>
          <img src={info_icon} alt="정보" />
          최근 주행 기록을 바탕으로 산정된 주의 항목입니다.
        </InfoText>
        {data?.map((el, idx) => {
          return (
            <WarningItem key={el.scenarioType}>
              {`${idx}. ${el.scenarioName}`} <span>{el.scenarioCount}번</span>
            </WarningItem>
          );
        })}
      </WarningContents>
    </WarningContainer>
  );
};

const WarningContainer = styled.div`
  width: 100%;
  height: 360px;
  margin-top: 6px;
  background-color: white;

  display: flex;
  justify-content: center;
`;

const WarningContents = styled.div`
  width: 360px;
`;

const WarningHeader = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #f86d60;
  margin: 24px 0 16px 0;
`;

const InfoText = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray6};
  img {
    width: 20px;
    margin-right: 5px;
  }
`;

const WarningItem = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray9};
  width: 100%;
  margin: 20px 0;
  position: relative;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue400};
    position: absolute;
    right: 0;
  }
`;
