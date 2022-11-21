import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { ChartProps } from "react-jsx-highcharts";
import { useDispatch } from "react-redux";
import { updateChart } from "../../redux/chartSlice";

const Title: React.FC<ChartProps> = ({ id, chartTitle, isFavorited }) => {
  const dispatch = useDispatch();
  const handleClick = (id: number) => {
    if (isFavorited) {
      dispatch(updateChart({ id, isFavorited: false }));
    } else {
      dispatch(updateChart({ id, isFavorited: true }));
    }
  };
  return (
    <div>
      <h1 className="title">
        {chartTitle}
        <span
          className={`star-icon ${isFavorited && "active"}`}
          onClick={() => handleClick(id)}
        >
          <StarIcon />
        </span>
      </h1>{" "}
    </div>
  );
};

export default Title;
