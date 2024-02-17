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

export const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [8, 3, 5, 4],
        backgroundColor: ["#FFD762", "#ABA7F9", "#564CFF", "#6CE4C0"],
        borderColor: ["#FFD762", "#ABA7F9", "#564CFF", "#6CE4C0"],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} options={options}></Doughnut>;
};
