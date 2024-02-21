import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
};

interface DoughnutChartProps {
  counts: number[];
}
export const DoughnutChart = ({ counts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: counts,
        backgroundColor: ["#FFD762", "#64A2FF", "#564CFF", "#6CE4C0"],
        borderWidth: 0,
      },
    ],
  };
  return <Doughnut data={data} options={options}></Doughnut>;
};
