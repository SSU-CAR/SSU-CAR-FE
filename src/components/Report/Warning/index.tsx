import * as styles from "./Warning.styles";
import chart_icon from "@assets/icons/chart_icon.svg";
import { DoughnutChart } from "./DoughnutChart";
import { DetailWarning } from "./DetailWarning/DetailWarning";

export const Warning = () => {
  return (
    <styles.WarningContainer>
      <styles.WarningHeader>
        <img src={chart_icon} alt="이번달 주의할 운전습관" />
        이번 달 주의할 운전습관
      </styles.WarningHeader>
      <styles.DoughnutContents>
        <styles.DoughnutChartContainer>
          <DoughnutChart />
        </styles.DoughnutChartContainer>
        <styles.DoughnutItems>
          <styles.DoughnutItem>
            <styles.ColorMark color="#FFD762" />
            실선에서 차선 변경
          </styles.DoughnutItem>
          <styles.DoughnutItem>
            <styles.ColorMark color="#64A2FF" />
            앞차 간격 미유지
          </styles.DoughnutItem>
          <styles.DoughnutItem>
            <styles.ColorMark color="#564CFF" />
            전방 주시 태만
          </styles.DoughnutItem>
          <styles.DoughnutItem>
            <styles.ColorMark color="#6CE4C0" />
            핸들에서 손 떼기
          </styles.DoughnutItem>
        </styles.DoughnutItems>
      </styles.DoughnutContents>
      <DetailWarning name="차량 내부 주의 항목" />
      <DetailWarning name="차량 외부 주의 항목" />
    </styles.WarningContainer>
  );
};
