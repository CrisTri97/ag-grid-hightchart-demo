import React, { useState } from "react";
import "./Charts.scss";
import HeatMap from "./HeatMap/HeatMap";

import LineChart from "./LineChart/LineChart";
import PipeChart from "./PipeChart/PipeChart";
import TimeSeries from "./TimeSeries/TimeSeries";
import StarIcon from "@mui/icons-material/Star";
import GridModel from "../GridModel/GridModel";
import { useSelector, useDispatch } from "react-redux";

const Charts = () => {
  const [grid, setGrid] = useState(false);
  const [line, setLine] = useState(false);
  const [pipe, setPipe] = useState(false);
  const [heatmap, setHeatmap] = useState(false);
  const [timeSeries, setTimeSeries] = useState(false);
  const { arrayComponent } = useSelector((state: any) => state.favorites);
  const dispatch = useDispatch();

  console.log("check state line , pipe", line, pipe);

  return (
    <div className="charts">
      {/* <div className="chart">
        <h1 className="title">
          Ag Grid
          <span
            className={`star-icon ${grid && "active"}`}
            onClick={() => handleClick("Grid")}
          >
            <StarIcon />
          </span>
        </h1>
        <GridModel />
      </div>
      <div className="chart">
        <h1 className="title">
          Line Chart
          <span
            className={`star-icon ${line && "active"}`}
            onClick={() => handleClick("Line")}
          >
            <StarIcon />
          </span>
        </h1>
        <LineChart />
      </div>
      <div className="chart">
        <h1 className="title">
          Pipe Chart
          <span
            className={`star-icon ${pipe && "active"}`}
            onClick={() => handleClick("Pipe")}
          >
            <StarIcon />
          </span>
        </h1>
        <PipeChart />
      </div>
      <div className="chart">
        <h1 className="title">
          Heatmap Chart
          <span
            className={`star-icon ${heatmap && "active"}`}
            onClick={() => handleClick("Heatmap")}
          >
            <StarIcon />
          </span>
        </h1>
        <HeatMap />
      </div>
      <div className="chart">
        <h1 className="title">
          Time Series Chart
          <span
            className={`star-icon ${timeSeries && "active"}`}
            onClick={() => handleClick("TimeSeries")}
          >
            <StarIcon />
          </span>
        </h1>
        <TimeSeries />
      </div> */}
    </div>
  );
};

export default Charts;
