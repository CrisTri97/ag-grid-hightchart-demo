import axios from "axios";
import PieChart from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChartIProps, rootState } from "../../../../interface";
import Title from "../../Title/Title";

const generateOption = (data: any, darkMode: any) => {
  return {
    chart: {
      type: "pie",
      backgroundColor: `${!darkMode ? "#080808" : "#98a9c2"} `,
      color: `${darkMode ? "#fff" : "#000000"} `,
    },
    title: {
      text: "Number of cases recorded in a day",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
    },
    series: [
      {
        name: "",
        color: "#006600",
        lineWidth: 1,
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 3,
          states: {
            hover: {
              enabled: true,
              lineWidth: 1,
            },
          },
        },
        data: [
          {
            name: "Confirmed",
            y: data.Confirmed,
          },
          {
            name: "Deaths",
            y: data.Deaths,
          },
        ],
      },
    ],
  };
};

const PipeChart: React.FC<ChartIProps> = ({ id, chartTitle, isFavorited }) => {
  const [options, setOptions] = useState({});
  const darkMode = useSelector((state: rootState) => state.theme.theme);
  useEffect(() => {
    const getData = async () => {
      const res: { data: any } = await axios.get(
        "https://api.covid19api.com/total/dayone/country/vn"
      );
      return res.data;
    };
    getData().then((data) => {
      let dataMap = data.pop();

      setOptions(generateOption(dataMap, darkMode));
    });
  }, [darkMode]);

  return (
    <div className="pipe">
      <Title chartTitle={chartTitle} id={id} isFavorited={isFavorited} />
      <PieChart highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PipeChart;
