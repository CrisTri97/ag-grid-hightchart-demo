import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Chart } from "../../../interface";
import HeatMap from "../../components/charts/HeatMap/HeatMap";
import LineChart from "../../components/charts/LineChart/LineChart";
import PipeChart from "../../components/charts/PipeChart/PipeChart";
import TimeSeries from "../../components/charts/TimeSeries/TimeSeries";
import GridModel from "../../components/GridModel/GridModel";
import "./Favorites.scss";
const Favorites: React.FC = () => {
  const { charts } = useSelector((state: any) => state.favorites) || [];
  const [listChart, setListChart] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("persist:root") === null) {
      setListChart([]);
    } else {
      setListChart(charts);
    }
  }, [listChart, charts]);
  console.log(listChart);

  return (
    <div className="favorite">
      <h1> Favorites chart</h1>
      {listChart && listChart.length < 0
        ? "No Value"
        : listChart.map((chart: Chart) => (
            <div key={chart.id} className="chart">
              {chart.chartName === "Grid" && chart.isFavorited === true ? (
                <div
                  style={{ display: `${chart.isFavorited !== true && "none"}` }}
                >
                  <GridModel {...chart} />
                </div>
              ) : chart.chartName === "Line" && chart.isFavorited === true ? (
                <div
                  style={{ display: `${chart.isFavorited !== true && "none"}` }}
                >
                  {" "}
                  <LineChart {...chart} />
                </div>
              ) : chart.chartName === "Pipe" && chart.isFavorited === true ? (
                <div
                  style={{ display: `${chart.isFavorited !== true && "none"}` }}
                >
                  <PipeChart {...chart} />
                </div>
              ) : chart.chartName === "TimeSeries" &&
                chart.isFavorited === true ? (
                <div
                  style={{ display: `${chart.isFavorited !== true && "none"}` }}
                >
                  {" "}
                  <TimeSeries {...chart} />
                </div>
              ) : (
                chart.chartName === "Heatmap" &&
                chart.isFavorited === true && (
                  <div
                    style={{
                      display: `${chart.isFavorited !== true && "none"}`,
                    }}
                  >
                    {" "}
                    <HeatMap {...chart} />
                  </div>
                )
              )}
            </div>
          ))}
    </div>
  );
};

export default Favorites;
