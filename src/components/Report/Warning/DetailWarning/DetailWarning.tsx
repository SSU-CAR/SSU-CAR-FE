import * as styles from "./DetailWarning.styles";
import danger_icon from "@assets/icons/danger_icon.svg";
import { RatioBar } from "./RatioBar";
import { RatioBarDetail } from "./RatioBarDetail";
import { ScenarioType } from "src/types/driving";

interface DetailWarningProps {
  name: string;
  data: ScenarioType[];
}
export const DetailWarning = ({ name, data }: DetailWarningProps) => {
  const counts = data.map((scenario) => scenario.scenarioCount);
  return (
    <styles.DetailWarningContainer>
      <styles.DetailWarningHeader>
        <img src={danger_icon} alt="주의 항목" />
        {name}
      </styles.DetailWarningHeader>
      <RatioBar data={counts} />
      <RatioBarDetail data={data} />
    </styles.DetailWarningContainer>
  );
};
