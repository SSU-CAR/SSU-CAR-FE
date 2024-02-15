import styled from "styled-components";

interface PageHeaderProps {
  name?: string;
  height?: string;
}

export const PageHeader = ({ name, height }: PageHeaderProps) => {
  return (
    <PageHeaderContainer height={height}>
      <PageNameText>{name}</PageNameText>
    </PageHeaderContainer>
  );
};

const PageHeaderContainer = styled.div<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height || "60px"};

  background-color: white;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.blue800};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNameText = styled.div`
  width: 360px;
`;
