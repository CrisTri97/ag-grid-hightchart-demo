import React, { useEffect, useState } from "react";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import axios from "axios";
import { useSelector } from "react-redux";
import { rootState } from "../../interface";

const generateOptions = (data: [], darkMode: any) => {
  return {
    chart: {
      height: 400,
      zoomType: "x",
      backgroundColor: `${!darkMode ? "#080808" : "#98a9c2"} `,
      color: `${darkMode ? "#fff" : "#000000"} `,
    },
    title: {
      text: "Time series demo",
    },

    xAxis: {
      type: "datetime",
      //   tickInterval: 1,
    },
    yAxis: {
      title: {
        text: "Exchange rate",
      },
      //   tickInterval: 1,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },

    series: [
      {
        type: "area",
        name: "USD to EUR",
        data: data,
      },
    ],
  };
};

const TimeSeries = () => {
  const [options, setOptions] = useState({});
  const darkMode = useSelector((state: rootState) => state.theme.theme);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json"
      );
      return res.data;
    };
    getData().then((data) => {
      setOptions(generateOptions(data, darkMode));
    });
  }, [darkMode]);
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TimeSeries;
