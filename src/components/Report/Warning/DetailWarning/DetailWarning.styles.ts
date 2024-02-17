import styled from "styled-components";

export const DetailWarningContainer = styled.div`
  margin-top: 20px;
`;

export const DetailWarningHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue500};
  img {
    width: 20px;
    margin-right: 5px;
  }
  display: flex;
  align-items: center;
  margin: 15px 0 20px;
`;
