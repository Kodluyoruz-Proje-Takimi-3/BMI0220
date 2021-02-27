import React from "react";
import { Line } from "react-chartjs-2";


const LineChart = ({ labelData, bmiData }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(63, 81, 181, 700);
    gradient.addColorStop(0, "#929dd9");
    gradient.addColorStop(1, "#172b4d");


    // console.log(`bmiData: ${bmiData}`);
    return {
      labels: labelData,

      datasets: [
        {
          label: "Your BMI",
          fontSize: 500,
          data: bmiData,
          backgroundColor: gradient,
          borderColor: "#98acf8",
          pointRadius: 8,
          pointHoverRadius: 10,
          pointHoverBorderColor: "white",
          pointHoverBorderWidth: 4,

        }
      ]
    };
  };
  const options = {
    responsive: true,

    scales: {
      xAxes: [
        {
          scaleLabel: {
            margin: '5px',
            display: true,
            labelString: "DATE",
            fontSize: 25,
            fontColor: "#F2A154",

          },
          gridLines: {
            display: false,
            color: "white",

          },

          ticks: {
            beginAtZero: true,
            fontColor: "#F2A154",
            fontSize: 16,

          }

        }
      ],
      yAxes: [
        {
          scaleLabel: {
            fontFamily: 'Poppins',
            display: true,
            labelString: "BODY MASS INDEX",
            fontSize: 25,
            fontColor: "#F2A154"
          },
          gridLines: {
            display: false,
            color: "white"
          },
          ticks: {
            fontFamily: 'Poppins',
            fontColor: "#f0f0f0",
            fontSize: 20,
            beginAtZero: true,

          }
        }
      ]
    },
    tooltips: {
      fontFamily: 'Poppins',
      titleFontSize: 16,
      bodyFontSize: 16
    }
  };

  return (
    <div className="mt-5 container">
      <Line data={data} options={options} />
    </div>
  );
};


export default LineChart;
