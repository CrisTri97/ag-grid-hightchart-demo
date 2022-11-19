import "./Home.scss";
import React, { useState } from "react";
import GridModel from "../../components/GridModel/GridModel";
import Charts from "../../components/charts/Charts";
import StarIcon from "@mui/icons-material/Star";
import Selector from "../../components/CountrySelector/Selector";
import { getCountries } from "../../apis";
import { Countries } from "../../components/interface";

const Home = () => {
  const [countries, setCountries] = useState<Countries>();

  React.useEffect(() => {
    getCountries().then((res) => {
      res && res.data.length > 0 && setCountries(res.data);
    });
  }, [countries]);

  const handleOnChange = () => {};

  return (
    <div className="home">
      <h1>Statistics on Corona ( Covid 19 )</h1>
      <div className="model-chart">
        <Charts />
      </div>
    </div>
  );
};

export default Home;
