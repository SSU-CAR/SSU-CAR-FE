import * as styles from "./Warning.styles";
import chart_icon from "@assets/icons/chart_icon.svg";
import { DoughnutChart } from "./DoughnutChart";

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
            <styles.ColorMark color="#ABA7F9" />
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
    </styles.WarningContainer>
  );
};
