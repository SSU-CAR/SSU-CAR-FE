import { ReportHistoryType } from "src/types/report";
import * as styles from "./Report.styles";
import { getDateString } from "src/utils/datetime";
import arrow_down_icon from "@assets/icons/arrow_down_icon.svg";

interface ReportProps {
  data: ReportHistoryType;
}
export const Report = ({ data }: ReportProps) => {
  return (
    <styles.ReportContainer>
      <styles.InfoContainer>
        <styles.InfoType>날짜</styles.InfoType>
        <styles.InfoContent>
          {getDateString(data.departuredAt)}
        </styles.InfoContent>
      </styles.InfoContainer>
      <styles.InfoContainer>
        <styles.InfoType>운행 시간</styles.InfoType>
        <styles.InfoContent>
          {data.departuredAt.slice(11, 16) +
            " - " +
            data.arrivedAt.slice(11, 16)}
        </styles.InfoContent>
      </styles.InfoContainer>
      <styles.InfoContainer>
        <styles.InfoType>주행 거리</styles.InfoType>
        <styles.InfoContent>{data.mileage + " km"}</styles.InfoContent>
      </styles.InfoContainer>
      <styles.InfoContainer>
        <styles.InfoType>운전 점수</styles.InfoType>
        <styles.InfoContent>{data.score}</styles.InfoContent>
      </styles.InfoContainer>
      <styles.SplitLine></styles.SplitLine>
      <styles.ShowMoreButton>
        자세히 보기
        <img src={arrow_down_icon} alt="자세히 보기 버튼" />
      </styles.ShowMoreButton>
    </styles.ReportContainer>
  );
};
