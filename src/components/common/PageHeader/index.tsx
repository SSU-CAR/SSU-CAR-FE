import styled from "styled-components";
import { ReactNode } from "react";

interface PageHeaderProps {
  name?: string;
  height?: string;
  children?: ReactNode;
}

export const PageHeader = ({ name, height, children }: PageHeaderProps) => {
  return (
    <PageHeaderContainer height={height}>
      <PageNameText>{name}</PageNameText>
      {children}
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
`;

const PageNameText = styled.div`
  width: 360px;
`;
