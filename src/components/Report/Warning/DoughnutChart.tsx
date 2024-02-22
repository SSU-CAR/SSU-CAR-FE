import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { ScenarioType } from "src/types/driving";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
};

interface DoughnutChartProps {
  warning: ScenarioType[];
}
export const DoughnutChart = ({ warning }: DoughnutChartProps) => {
  const [datas, setDatas] = useState([1, 3, 1, 5]);
  useEffect(() => {
    const counts = warning?.map((scenario: any) => scenario.scenarioCount);
    setDatas(counts);
  }, [warning]);
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: datas,
        backgroundColor: ["#FFD762", "#64A2FF", "#564CFF", "#6CE4C0"],
        borderWidth: 0,
      },
    ],
  };
  return <Doughnut data={data} options={options}></Doughnut>;
};
