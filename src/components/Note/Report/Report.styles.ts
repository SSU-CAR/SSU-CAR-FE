import styled from "styled-components";

export const ReportContainer = styled.div<{ open: boolean }>`
  width: 360px;
  height: ${(props) => (props.open ? "345px" : "164px")};
  margin: 12px 0;
  padding: 15px 22px;

  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 4px;
`;

export const InfoContainer = styled.div`
  margin: 6px 0;
`;

export const InfoType = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray5};

  margin-right: 10px;
`;

export const InfoContent = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray9};
  &.score {
    color: ${({ theme }) => theme.colors.blue500};
  }
`;

export const SplitLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray5};
  margin-top: 12px;
`;

export const ShowMoreButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin-top: 12px;

  font-family: "Pretendard";
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray5};

  display: flex;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
`;

export const DetailContents = styled.div``;
