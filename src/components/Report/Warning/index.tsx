import * as styles from "./Warning.styles";
import chart_icon from "@assets/icons/chart_icon.svg";
import { DoughnutChart } from "./DoughnutChart";
import { DetailWarning } from "./DetailWarning/DetailWarning";
import { reportCautionAPI, reportWarningAPI } from "@api/reportAPIS";
import { useEffect, useState } from "react";
import { ScenarioType } from "src/types/driving";
import { ReportCautionType } from "src/types/report";

export const Warning = () => {
  const [warning, setWarning] = useState<ScenarioType[]>([]);
  let counts = [1, 1, 1, 1];
  const [detail, setDetail] = useState<ReportCautionType>({
    internalSummaries: [],
    externalSummaries: [],
  });

  useEffect(() => {
    const response = reportWarningAPI();
    response.then((res) => {
      if (res?.topRisks) {
        setWarning(res.topRisks);
        counts = warning.map((scenario) => scenario.scenarioCount);
      }
    });
  }, []);

  useEffect(() => {
    const response = reportCautionAPI();
    response.then((res) => {
      if (res) setDetail(res);
    });
  }, []);

  return (
    <styles.WarningContainer>
      <styles.WarningHeader>
        <img src={chart_icon} alt="이번달 주의할 운전습관" />
        이번 달 주의할 운전습관
      </styles.WarningHeader>
      <styles.DoughnutContents>
        <styles.DoughnutChartContainer>
          <DoughnutChart counts={counts} />
        </styles.DoughnutChartContainer>
        <styles.DoughnutItems>
          <styles.DoughnutItem>
            <styles.ColorMark color="#FFD762" />
            {warning[0]?.scenarioName}
          </styles.DoughnutItem>
          <styles.DoughnutItem>
            <styles.ColorMark color="#64A2FF" />
            {warning[1]?.scenarioName}
          </styles.DoughnutItem>
          <styles.DoughnutItem>
            <styles.ColorMark color="#564CFF" />
            {warning[2]?.scenarioName}
          </styles.DoughnutItem>
          <styles.DoughnutItem>
            <styles.ColorMark color="#6CE4C0" />
            {warning[3]?.scenarioName}
          </styles.DoughnutItem>
        </styles.DoughnutItems>
      </styles.DoughnutContents>
      <DetailWarning
        name="차량 내부 주의 항목"
        data={detail?.internalSummaries}
      />
      <DetailWarning
        name="차량 외부 주의 항목"
        data={detail?.externalSummaries}
      />
    </styles.WarningContainer>
  );
};
