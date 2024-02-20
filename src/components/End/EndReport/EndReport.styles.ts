import styled from "styled-components";

export const EndReportContainer = styled.div`
  width: 360px;
  height: 480px;
  border-radius: 8px;
  padding: 30px;

  background-color: ${({ theme }) => theme.colors.blue50};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const EndReportHeader = styled.div`
  font-family: "HyndaiHarmony";
  font-size: 22px;
  color: ${({ theme }) => theme.colors.blue900};
  span {
    font-family: "HyndaiHarmony";
    font-weight: 300;
    color: ${({ theme }) => theme.colors.blue900};
    font-size: 16px;

    margin-right: 6px;
  }
`;

export const BasicInfos = styled.div`
  display: flex;
  flex-direction: column;

  margin: 15px 0;
  padding-bottom: 5px;
`;

export const BasicInfo = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray6};
  span {
    color: ${({ theme }) => theme.colors.blue400};
    margin-left: 6px;
  }
  margin: 4px 0;
`;

export const DetailInfo = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray4};
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const SubHeader = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray9};

  margin: 15px 0;
`;

export const DetailContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailContent = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray8};

  margin: 5px 0;

  .count {
    color: ${({ theme }) => theme.colors.blue500};
  }
`;
