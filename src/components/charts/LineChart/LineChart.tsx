import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChartIProps, rootState } from "../../../../interface";
import Title from "../../Title/Title";
import "./LineChart.scss";
const generateOptions = (data: [], darkMode: any) => {
  const categories = data.map((item: any) =>
    moment(item.Date).format("DD/MM/YYYY")
  );

  return {
    chart: {
      height: 400,
      backgroundColor: `${!darkMode ? "#080808" : "#98a9c2"} `,
      color: `${darkMode ? "#fff" : "#000000"} `,
    },
    title: {
      text: "Total infections",
    },
    xAxis: {
      //   categories: ["A", "B", "C"],
      categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Total infections",
        // data: [1, 2, 3],
        data: data.map((item: any) => item.Confirmed),
      },
    ],
  };
};

const LineChart: React.FC<ChartIProps> = ({ id, chartTitle, isFavorited }) => {
  const [option, setOption] = useState({});
  const darkMode = useSelector((state: rootState) => state.theme.theme);
  useEffect(() => {
    async function getData(): Promise<any> {
      const res: { data: any } = await axios.get(
        "https://api.covid19api.com/dayone/country/vn?from=2019-01-01T00:00:00&to=2020-01-01T00:00:00"
      );

      return res.data;
    }

    getData().then((data) => {
      setOption(generateOptions(data, darkMode));
    });
  }, [darkMode]);

  return (
    <div className="line-chart">
      <Title chartTitle={chartTitle} id={id} isFavorited={isFavorited} />
      <HighchartsReact highcharts={Highcharts} options={option} />
    </div>
  );
};

export default LineChart;
