import { useState } from "react";
import { ReportHistoryType } from "src/types/report";
import * as styles from "./Report.styles";
import { getDateString } from "src/utils/datetime";
import arrow_down_icon from "@assets/icons/arrow_down_icon.svg";
import arrow_up_icon from "@assets/icons/arrow_up_icon.svg";

import { DetailReport } from "../DetailReport";

interface ReportProps {
  data: ReportHistoryType;
}
export const Report = ({ data }: ReportProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); //자세히 보기 open 여부

  return (
    <styles.ReportContainer open={isOpen}>
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

      {isOpen ? (
        <styles.DetailContents>
          <DetailReport reportId={data.reportId} />
          <styles.ShowMoreButton
            onClick={() => {
              setIsOpen(false);
            }}
          >
            닫기
            <img src={arrow_up_icon} alt="자세히 보기 버튼" />
          </styles.ShowMoreButton>
        </styles.DetailContents>
      ) : (
        <styles.ShowMoreButton
          onClick={() => {
            setIsOpen(true);
          }}
        >
          자세히 보기
          <img src={arrow_down_icon} alt="자세히 보기 버튼" />
        </styles.ShowMoreButton>
      )}
    </styles.ReportContainer>
  );
};
