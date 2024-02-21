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

const labels = ["", "", ""];

export const CurrentScoreChart = () => {
  const data = {
    labels,
    datasets: [
      {
        data: [63, 88, 72],
        borderColor: "#87A3FF",
        backgroundColor: "#4561DB",
      },
    ],
  };
  return <Line options={options} data={data} />;
};
