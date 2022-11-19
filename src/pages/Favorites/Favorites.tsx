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
const Favorites: React.FC = () => {
  const { line, heatmap, timeSeries, grid, pipe } = useSelector(
    (state: any) => state.favorites
  );

  console.log(grid);

  return (
    <div className="favorite">
      <div className="charts">
        <h2 className="title">All favorite charts</h2>
        {grid && (
          <div className="chart">
            <GridModel />
          </div>
        )}
        {line && (
          <div className="chart">
            <LineChart />
          </div>
        )}
        {pipe && (
          <div className="chart">
            <PipeChart />
          </div>
        )}
        {heatmap && (
          <div className="chart">
            <HeatMap />
          </div>
        )}
        {timeSeries && (
          <div className="chart">
            <TimeSeries />
          </div>
        )}
        {!line && !heatmap && !grid && !timeSeries && !pipe && (
          <p>No charts have been liked </p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
