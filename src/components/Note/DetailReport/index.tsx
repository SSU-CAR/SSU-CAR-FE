import { useState, useEffect } from "react";
import { ReportDetailType } from "src/types/report";
import * as styles from "./Detail.styles";

interface DetailReportProps {
  reportId: number;
}

const data = [
  {
    scenarioType: 1,
    scenarioName: "차선 변경",
    total: 1,
  },
  {
    scenarioType: 4,
    scenarioName: "정면 주시 안함",
    total: 12,
  },
];
export const DetailReport = ({ reportId }: DetailReportProps) => {
  const [deatils, setDetails] = useState<ReportDetailType[]>([]);

  //TODO: API 연결
  useEffect(() => {
    setDetails(data);
  }, []);
  return (
    <>
      <styles.ProtectedFrom>차량 외부</styles.ProtectedFrom>
      {deatils.map((el) => {
        return (
          <styles.Scenario key={el.scenarioType}>
            <styles.ScenarioName>{el.scenarioName}</styles.ScenarioName>
            <styles.Number>{el.total}번</styles.Number>
          </styles.Scenario>
        );
      })}
      <styles.ProtectedFrom>차량 내부</styles.ProtectedFrom>
      {deatils.map((el) => {
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
