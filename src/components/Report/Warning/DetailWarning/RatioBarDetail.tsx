import styled from "styled-components";

export const RatioBarDetail = () => {
  return (
    <RatioBarDetailContainer>
      <BarContent>
        <ColorMark className="first" />
        <ContentName>실선에서 차선 변경</ContentName>
        <ContentCount>12회</ContentCount>
      </BarContent>
      <BarContent>
        <ColorMark className="second" />
        <ContentName>앞차 간격 미유지</ContentName>
        <ContentCount>8회</ContentCount>
      </BarContent>
      <BarContent>
        <ColorMark className="third" />
        <ContentName>전방 주시 태만</ContentName>
        <ContentCount>4회</ContentCount>
      </BarContent>
    </RatioBarDetailContainer>
  );
};

const RatioBarDetailContainer = styled.div`
  width: 320px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  position: relative;
`;

const BarContent = styled.div`
  display: flex;
  margin: 6px 0;
`;

const ColorMark = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  margin-right: 6px;
  &.first {
    background-color: ${({ theme }) => theme.colors.chart8};
  }
  &.second {
    background-color: ${({ theme }) => theme.colors.chart6};
  }
  &.third {
    background-color: ${({ theme }) => theme.colors.chart7};
  }
`;

const ContentName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray8};
`;

const ContentCount = styled.div`
  position: absolute;
  right: 0;

  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue500};
`;
