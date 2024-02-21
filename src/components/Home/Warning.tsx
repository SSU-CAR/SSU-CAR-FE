import styled from "styled-components";
import info_icon from "@assets/icons/info_icon.svg";

export const Warning = () => {
  return (
    <WarningContainer>
      <WarningContents>
        <WarningHeader>주의해야 할 운전 습관</WarningHeader>
        <InfoText>
          <img src={info_icon} alt="정보" />
          최근 주행 기록을 바탕으로 산정된 주의 항목입니다.
        </InfoText>
        <WarningItem>
          1. 실선에서 차선 변경 <span>12번</span>
        </WarningItem>
        <WarningItem>
          2. 실선에서 차선 변경 <span>8번</span>
        </WarningItem>
        <WarningItem>
          3. 실선에서 차선 변경 <span>4번</span>
        </WarningItem>
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
