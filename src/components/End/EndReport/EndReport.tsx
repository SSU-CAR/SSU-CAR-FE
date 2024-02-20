import * as styles from "./EndReport.styles";
import { DrivingEndType } from "src/types/driving";

interface EndReportProps {
  data: DrivingEndType | undefined;
}
export const EndReport = ({ data }: EndReportProps) => {
  return (
    <styles.EndReportContainer>
      <styles.EndReportHeader>
        <span>김모비님을 위한</span>주행 후 리포트
      </styles.EndReportHeader>
      <styles.BasicInfos>
        <styles.BasicInfo>
          운전 점수<span>{data?.score}점</span>
        </styles.BasicInfo>
        <styles.BasicInfo>
          주행 거리<span>{data?.mileage}km</span>
        </styles.BasicInfo>
        <styles.BasicInfo>
          주행 시간
          <span>{`${data?.departuredAt.slice(10, 15)} - ${data?.arrivedAt.slice(
            10,
            15
          )}`}</span>
        </styles.BasicInfo>
        <styles.BasicInfo>
          코멘트<span>{data?.scoreComment}</span>
        </styles.BasicInfo>
      </styles.BasicInfos>
      <styles.DetailInfo>
        <styles.SubHeader>차량 외부 감지 항목</styles.SubHeader>
        <styles.DetailContents>
          {data?.externalSummaries.map((el) => {
            return (
              <styles.DetailContent key={el.scenarioType}>
                ∙ {el.scenarioName}
                <div className="count">{el.scenarioCount}번</div>
              </styles.DetailContent>
            );
          })}
        </styles.DetailContents>
      </styles.DetailInfo>
      <styles.DetailInfo>
        <styles.SubHeader>차량 내부 감지 항목</styles.SubHeader>
        <styles.DetailContents>
          {data?.internalSummaries.map((el) => {
            return (
              <styles.DetailContent key={el.scenarioType}>
                ∙ {el.scenarioName}
                <div className="count">{el.scenarioCount}번</div>
              </styles.DetailContent>
            );
          })}
        </styles.DetailContents>
      </styles.DetailInfo>
    </styles.EndReportContainer>
  );
};
