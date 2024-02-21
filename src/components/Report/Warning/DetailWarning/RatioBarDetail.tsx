import styled from "styled-components";
import { ScenarioType } from "src/types/driving";

interface RatioBarDetailProps {
  data: ScenarioType[];
}
export const RatioBarDetail = ({ data }: RatioBarDetailProps) => {
  const classNames = ["first", "second", "third"];
  return (
    <RatioBarDetailContainer>
      {data.map((el, idx) => {
        return (
          <BarContent key={el.scenarioType}>
            <ColorMark className={classNames[idx]} />
            <ContentName>{el.scenarioName}</ContentName>
            <ContentCount>{el.scenarioCount}회</ContentCount>
          </BarContent>
        );
      })}
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
