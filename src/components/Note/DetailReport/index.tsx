import { useState, useEffect } from "react";
import { ReportDetailType } from "src/types/report";
import * as styles from "./Detail.styles";
import { historyDetailAPI } from "@api/historyAPIS";

interface DetailReportProps {
  reportId: number;
}

interface DetailHistoryType {
  internalSummaries: ReportDetailType[];
  externalSummaries: ReportDetailType[];
}

export const DetailReport = ({ reportId }: DetailReportProps) => {
  const [deatils, setDetails] = useState<DetailHistoryType>();

  useEffect(() => {
    const response = historyDetailAPI(reportId);
    response.then((res) => {
      setDetails(res);
    });
  }, []);
  return (
    <>
      <styles.ProtectedFrom>차량 외부</styles.ProtectedFrom>
      {deatils?.externalSummaries.map((el) => {
        return (
          <styles.Scenario key={el.scenarioType}>
            <styles.ScenarioName>{el.scenarioName}</styles.ScenarioName>
            <styles.Number>{el.total}번</styles.Number>
          </styles.Scenario>
        );
      })}
      <styles.ProtectedFrom>차량 내부</styles.ProtectedFrom>
      {deatils?.internalSummaries.map((el) => {
        return (
          <styles.Scenario key={el.scenarioType}>
            <styles.ScenarioName>{el.scenarioName}</styles.ScenarioName>
            <styles.Number>{el.total}번</styles.Number>
          </styles.Scenario>
        );
      })}
    </>
  );
};
