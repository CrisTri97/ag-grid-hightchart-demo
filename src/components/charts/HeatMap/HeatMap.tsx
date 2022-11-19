import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import rawData from "./data";
import _ from "lodash";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useState } from "react";
import "./HeatMap.scss";
import { useSelector } from "react-redux";
import { rootState } from "../../interface";

HighchartsHeatmap(Highcharts);
const x = [
  rawData.action,
  rawData.cnc,
  rawData.installation,
  rawData.delivery,
  rawData.none,
].reverse();
const data = x
  .map((l, i) =>
    l.map((c, j) => ({
      x: j,
      y: i,
      value: c.count,
      name: c.count.toLocaleString(),
    }))
  )
  .flat();

const chartOptions = (darkMode: any) => {
  return {
    chart: {
      type: "heatmap",
      marginTop: 20,
      marginBottom: 80,
      plotBorderWidth: 0,
      borderWidth: 0,
      backgroundColor: `${!darkMode ? "#2c3142" : "#98a9c2"} `,
      color: `${darkMode ? "#fff" : "#000000"} `,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: undefined,
    },

    xAxis: {
      categories: _.fill(Array(10), 1).map((e: any, i: any) => (i + 1) * 10),
    },

    yAxis: {
      categories: ["None", "Delivery", "Installation", "C&C", "Action"],
      title: null,
    },

    colorAxis: {
      min: 0,
      max: 100,

      reversed: false,
    },

    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 280,
    },

    series: [
      {
        name: "Sales per employee",
        borderWidth: 1,
        data,
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],
  };
};

const HeatMap = () => {
  const darkMode = useSelector((state: rootState) => state.theme.theme);
  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions(chartOptions(darkMode));
  }, [darkMode]);
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HeatMap;
