import React, { useState } from "react";
import GridModel from "../../components/GridModel/GridModel";
import "./Home.scss";
import { useSelector } from "react-redux";
import { Chart, Countries } from "../../../interface";
import { getCountries } from "../../apis";
import HeatMap from "../../components/charts/HeatMap/HeatMap";
import LineChart from "../../components/charts/LineChart/LineChart";
import PipeChart from "../../components/charts/PipeChart/PipeChart";
import TimeSeries from "../../components/charts/TimeSeries/TimeSeries";

const Home = () => {
  const [countries, setCountries] = useState<Countries>();
  const { charts } = useSelector((state: any) => state.favorites);

  React.useEffect(() => {
    getCountries().then((res) => {
      res && res.data.length > 0 && setCountries(res.data);
    });
  }, [countries]);

  return (
    <div className="home">
      <h1>Statistics on Corona ( Covid 19 )</h1>
      <div className="model-chart">
        {charts.map((chart: Chart) => (
          <div key={chart.id} className="chart">
            {chart.chartName === "Grid" ? (
              <GridModel {...chart} />
            ) : chart.chartName === "Line" ? (
              <LineChart {...chart} />
            ) : chart.chartName === "Pipe" ? (
              <PipeChart {...chart} />
            ) : chart.chartName === "TimeSeries" ? (
              <TimeSeries {...chart} />
            ) : chart.chartName === "Heatmap" ? (
              <HeatMap {...chart} />
            ) : (
              "No chart"
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
