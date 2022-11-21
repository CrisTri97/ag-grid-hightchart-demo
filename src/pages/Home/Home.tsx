import "./Home.scss";
import React, { useState } from "react";
import GridModel from "../../components/GridModel/GridModel";
import Charts from "../../components/charts/Charts";
import StarIcon from "@mui/icons-material/Star";
import Selector from "../../components/CountrySelector/Selector";
import { getCountries } from "../../apis";
import { Chart, Countries } from "../../../interface";
import { useDispatch, useSelector } from "react-redux";
import { Grade } from "@mui/icons-material";
import LineChart from "../../components/charts/LineChart/LineChart";
import PipeChart from "../../components/charts/PipeChart/PipeChart";
import TimeSeries from "../../components/charts/TimeSeries/TimeSeries";
import HeatMap from "../../components/charts/HeatMap/HeatMap";
import { updateChart } from "../../redux/chartSlice";
import { StatusPanelComponent } from "ag-grid-community/dist/lib/components/framework/componentTypes";

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
              <GridModel id={chart.id} isFavorited={chart.isFavorited} />
            ) : chart.chartName === "Line" ? (
              <LineChart id={chart.id} isFavorited={chart.isFavorited} />
            ) : chart.chartName === "Pipe" ? (
              <PipeChart id={chart.id} isFavorited={chart.isFavorited} />
            ) : chart.chartName === "TimeSeries" ? (
              <TimeSeries id={chart.id} isFavorited={chart.isFavorited} />
            ) : chart.chartName === "Heatmap" ? (
              <HeatMap id={chart.id} isFavorited={chart.isFavorited} />
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
