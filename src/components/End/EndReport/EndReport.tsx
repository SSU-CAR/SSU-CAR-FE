import * as styles from "./EndReport.styles";

export const EndReport = () => {
  return (
    <styles.EndReportContainer>
      <styles.EndReportHeader>
        <span>김모비님을 위한</span>주행 후 리포트
      </styles.EndReportHeader>
      <styles.BasicInfos>
        <styles.BasicInfo>
          운전 점수<span>100점</span>
        </styles.BasicInfo>
        <styles.BasicInfo>
          주행 거리<span>12km</span>
        </styles.BasicInfo>
        <styles.BasicInfo>
          주행 시간<span>8:40 - 12:20</span>
        </styles.BasicInfo>
      </styles.BasicInfos>
      <styles.DetailInfo>
        <styles.SubHeader>차량 외부 감지 항목</styles.SubHeader>
        <styles.DetailContents>
          <styles.DetailContent>
            ∙ 감지 시나리오 1번<div className="count">10번</div>
          </styles.DetailContent>
          <styles.DetailContent>
            ∙ 감지 시나리오 2번<div className="count">10번</div>
          </styles.DetailContent>
          <styles.DetailContent>
            ∙ 감지 시나리오 3번<div className="count">10번</div>
          </styles.DetailContent>
        </styles.DetailContents>
      </styles.DetailInfo>
      <styles.DetailInfo>
        <styles.SubHeader>차량 내부 감지 항목</styles.SubHeader>
        <styles.DetailContents>
          <styles.DetailContent>
            ∙ 감지 시나리오 1번<div className="count">10번</div>
          </styles.DetailContent>
          <styles.DetailContent>
            ∙ 감지 시나리오 2번<div className="count">10번</div>
          </styles.DetailContent>
          <styles.DetailContent>
            ∙ 감지 시나리오 3번<div className="count">10번</div>
          </styles.DetailContent>
        </styles.DetailContents>
      </styles.DetailInfo>
    </styles.EndReportContainer>
  );
};
