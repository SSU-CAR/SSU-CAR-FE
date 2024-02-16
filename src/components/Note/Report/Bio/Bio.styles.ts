import styled from "styled-components";

export const BioContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  margin-top: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BioName = styled.div`
  width: 360px;
  margin: 14px 0;

  font-family: "Pretendard";
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray9};
`;

export const DistanceContainer = styled.div`
  width: 360px;
  display: flex;
  margin-bottom: 10px;
`;

export const Distance = styled.div``;

export const DistanceName = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray6};

  margin-right: 8px;
`;

export const DistanceValue = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue500};

  margin-right: 24px;
`;
