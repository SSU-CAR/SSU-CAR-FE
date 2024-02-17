import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 0,
      max: 100,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const getFormerMonth = (former: number) => {
  const current = new Date().getMonth() + 1;
  let formerMonth = current - former;
  if (formerMonth <= 0) formerMonth += 12;
  return formerMonth;
};

const labels = [
  `${getFormerMonth(5)}월`,
  `${getFormerMonth(4)}월`,
  `${getFormerMonth(3)}월`,
  `${getFormerMonth(2)}월`,
  `${getFormerMonth(1)}월`,
  `${getFormerMonth(0)}월`,
];

export interface ScoreChartProps {
  months: number[];
}
export const ScoreChart = ({ months }: ScoreChartProps) => {
  const data = {
    labels,
    datasets: [
      {
        data: months,
        borderColor: "#87A3FF",
        backgroundColor: "#4561DB",
      },
    ],
  };
  return <Line options={options} data={data} />;
};
