import * as styles from "./DetailWarning.styles";
import danger_icon from "@assets/icons/danger_icon.svg";
import { RatioBar } from "./RatioBar";
import { RatioBarDetail } from "./RatioBarDetail";

interface DetailWarningProps {
  name: string;
}
export const DetailWarning = ({ name }: DetailWarningProps) => {
  const data = [12, 8, 4];
  return (
    <styles.DetailWarningContainer>
      <styles.DetailWarningHeader>
        <img src={danger_icon} alt="주의 항목" />
        {name}
      </styles.DetailWarningHeader>
      <RatioBar data={data} />
      <RatioBarDetail />
    </styles.DetailWarningContainer>
  );
};
