import React from "react";
import LineChart from "../../components/charts/LineChart/LineChart";
import HeatMap from "../../components/charts/HeatMap/HeatMap";
import PipeChart from "../../components/charts/PipeChart/PipeChart";
import TimeSeries from "../../components/charts/TimeSeries/TimeSeries";
import GridModel from "../../components/GridModel/GridModel";
import { useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import "./Favorites.scss";
import { time } from "console";
import { Chart } from "../../../interface";
const Favorites: React.FC = () => {
  const { charts } = useSelector((state: any) => state.favorites);
  console.log(charts);

  return (
    <div className="favorite">
      <h1> Favorites chart</h1>
      {charts.map((chart: Chart) => (
        <div key={chart.id} className="chart">
          {chart.chartName === "Grid" && chart.isFavorited === true ? (
            <div style={{ display: `${chart.isFavorited != true && "none"}` }}>
              <GridModel id={chart.id} isFavorited={chart.isFavorited} />
            </div>
          ) : chart.chartName === "Line" && chart.isFavorited === true ? (
            <div style={{ display: `${chart.isFavorited != true && "none"}` }}>
              {" "}
              <LineChart id={chart.id} isFavorited={chart.isFavorited} />
            </div>
          ) : chart.chartName === "Pipe" && chart.isFavorited === true ? (
            <div style={{ display: `${chart.isFavorited != true && "none"}` }}>
              <PipeChart id={chart.id} isFavorited={chart.isFavorited} />
            </div>
          ) : chart.chartName === "TimeSeries" && chart.isFavorited === true ? (
            <div style={{ display: `${chart.isFavorited != true && "none"}` }}>
              {" "}
              <TimeSeries id={chart.id} isFavorited={chart.isFavorited} />
            </div>
          ) : (
            chart.chartName === "Heatmap" &&
            chart.isFavorited === true && (
              <div
                style={{ display: `${chart.isFavorited != true && "none"}` }}
              >
                {" "}
                <HeatMap id={chart.id} isFavorited={chart.isFavorited} />
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Favorites;
