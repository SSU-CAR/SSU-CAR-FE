import styled from "styled-components";
import { PageHeader } from "@components/common/PageHeader";

export const Badge = () => {
  return (
    <BadgeContainer>
      <PageHeader name="나의 배지" height="100px">
        <SubHeader>
          <div>김모비님이 지금까지 획득하신 배지입니다.</div>
          <div>
            <span>주행 피드백</span>을 통한 <span>안전 운전</span>으로 더 많은
            배지를 모아보세요.
          </div>
        </SubHeader>
      </PageHeader>
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  position: relative;
  height: 100%;
`;

const SubHeader = styled.div`
  width: 360px;
  margin-top: 7px;
  color: ${({ theme }) => theme.colors.gray6};
  font-weight: 500;
  font-size: 12px;
  span {
    color: ${({ theme }) => theme.colors.blue900};
  }
  div {
    margin: 4px 0;
  }
`;
