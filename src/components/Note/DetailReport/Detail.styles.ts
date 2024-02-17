import styled from "styled-components";

export const ProtectedFrom = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue400};

  margin: 15px 0;
`;

export const Scenario = styled.div`
  width: 100%;
  height: 20px;
  margin: 4px 0;
  padding: 0 8px;

  display: flex;
  justify-content: space-between;
`;

export const ScenarioName = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray9};
`;

export const Number = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue400};

  width: 40px;
  text-align: end;
`;
