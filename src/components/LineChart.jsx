import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const labels = [
    "11pm",
    "Oct 14",
    "1 am",
    "2 am",
    "3 am",
    "4 am",
    "5 am",
    "6 am",
    "7 am",
    "8 am",
    "9 am",
    "10 am",
    "11 am",
    "12 am",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Hourly forecast",
        data: [
          14, 13, 12, 11, 11, 12, 14, 17, 18, 19, 24, 25, 25, 25, 25, 25, 25,
          26, 26, 28,
        ],
        fill: false,
        borderColor: "#FFB36C",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      myCustomText: {
        display: true,
        text: "Hourly forecast",
      },
    },
    layout: {
      padding: {
        top: 50,
        left: 10,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
        position: "top",
      },
      y: {
        ticks: {
          color: "black",
          callback: function (value) {
            const labelsY = [5, 10, 15, 20, 25];
            if (labelsY.includes(value)) return value + "°C";
            return "";
          },
        },
        min: 0,
        max: 40,
        stepSize: 10,
      },
    },
  };

  const plugins = [
    {
      id: "myCustomText",
      beforeDraw: (chart) => {
        if (chart.options.plugins.myCustomText.display) {
          const ctx = chart.ctx;
          ctx.save();
          ctx.font = "20px Arial";
          ctx.fillStyle = "black";
          ctx.textAlign = "left";
          ctx.textBaseline = "top";
          ctx.fillText(
            chart.options.plugins.myCustomText.text,
            chart.chartArea.left + 5,
            10
          );
          ctx.restore();
        }
      },
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          borderRadius: "20px",
          margin: "20px",
        }}
      >
        <Line
          data={data}
          options={options}
          plugins={plugins}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </>
  );
}
