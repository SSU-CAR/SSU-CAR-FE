import styled from "styled-components";
import { PageHeader } from "@components/common/PageHeader";
import { Bio } from "@components/Note/Report/Bio";

export const Report = () => {
  return (
    <ReportContainer>
      <PageHeader name="주행 리포트" height="85px">
        <SubHeader>김모비님을 위한 주행 피드백 리포트입니다.</SubHeader>
      </PageHeader>
      <Bio />
    </ReportContainer>
  );
};

const ReportContainer = styled.div``;

const SubHeader = styled.div`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray9};

  width: 360px;
  margin-top: 15px;
`;
