import styled from "styled-components";

interface RatioBarProps {
  data: number[];
}
export const RatioBar = ({ data }: RatioBarProps) => {
  const sum = data.reduce((acc, cur) => acc + cur, 0);

  const getWidth = (num: number) => {
    const width = Math.ceil(320 * (num / sum));
    return width;
  };

  return (
    <RatioBarContainer>
      <RatioContent className="first" width={getWidth(data[0])} />
      <RatioContent className="second" width={getWidth(data[1])} />
      <RatioContent className="third" width={getWidth(data[2])} />
    </RatioBarContainer>
  );
};

const RatioBarContainer = styled.div`
  width: 320px;
  height: 10px;
  display: flex;
`;

const RatioContent = styled.div<{ width: number }>`
  width: ${(props) => props.width + "px"};
  height: 12px;
  &.first {
    background-color: ${({ theme }) => theme.colors.chart8};
    border-radius: 12px 0 0 12px;
  }
  &.second {
    background-color: ${({ theme }) => theme.colors.chart6};
  }
  &.third {
    background-color: ${({ theme }) => theme.colors.chart7};
    border-radius: 0 12px 12px 0;
  }
`;
