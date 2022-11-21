import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "./GridModel.scss";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-balham.css";
import { useDispatch, useSelector } from "react-redux";
import { Chart, rootState } from "../../../interface";
import { CovidData } from "../../../interface";
import {
  ColDef,
  GridReadyEvent,
  ValueFormatterParams,
} from "ag-grid-community";
import moment from "moment";
import StarIcon from "@mui/icons-material/Star";
import { stubFalse } from "lodash";
import { updateChart } from "../../redux/chartSlice";
interface GridProps {
  id: number;
  isFavorited: boolean;
}
const GridModel: React.FC<GridProps> = (props) => {
  const [rowData, setRowData] = React.useState<CovidData[]>([]);

  const [columnDefs, setColumnDefs] = React.useState<ColDef[]>([
    {
      headerName: "#",
      colId: "rowNum",
      valueGetter: "node.id",
      width: 80,
      pinned: "left",
    },
    {
      headerName: "Country",
      field: "Country",
      resizable: true,
      pinned: "left",
      headerTooltip: "The country the athlete represented",
    },
    { headerName: "CountryCode", field: "CountryCode", resizable: true },
    { headerName: "Province", field: "Province", resizable: true, hide: true },
    { headerName: "City", field: "City", resizable: true, hide: true },
    { headerName: "CityCode", field: "CityCode", resizable: true, hide: true },
    {
      headerName: "Lat",
      field: "Lat",
      resizable: true,
    },
    { headerName: "Lon", field: "Lon", resizable: true },
    {
      headerName: "Confirmed",
      field: "Confirmed",
      resizable: true,
      sortable: true,
    },
    { headerName: "Deaths", field: "Deaths", resizable: true, sortable: true },
    {
      headerName: "Recovered",
      field: "Recovered",
      resizable: true,
      sortable: true,
    },
    { headerName: "Active", field: "Active", resizable: true, sortable: true },
    {
      headerName: "Date",
      field: "Date",
      valueFormatter: (params: ValueFormatterParams<CovidData>) => {
        // params.value: number
        const dateFormat = moment(params.value).format("YYYY/MMM/DD");
        console.log(typeof params.value);

        return dateFormat;
      },
    },
  ]);

  React.useEffect(() => {
    fetch(
      "https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z"
    )
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  const darkMode = useSelector((state: rootState) => state.theme.theme);
  const { charts } = useSelector((state: any) => state.favorites);
  const rowClass = "my-row";
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    if (props.isFavorited) {
      dispatch(updateChart({ id, isFavorited: false }));
    } else {
      dispatch(updateChart({ id, isFavorited: true }));
    }
  };
  return (
    <>
      <div className={`model ag-theme-balham${darkMode ? "" : "-dark"}`}>
        <h1 className="title">
          Ag Grig
          <span
            className={`star-icon ${props.isFavorited && "active"}`}
            onClick={() => handleClick(props.id)}
          >
            <StarIcon />
          </span>
        </h1>{" "}
        <AgGridReact
          rowStyle={{ width: "100%" }}
          rowClass={rowClass}
          rowData={rowData && rowData.length > 0 ? rowData : []}
          columnDefs={columnDefs}
          enableCharts={true}
          enableRangeSelection={true}
          rowSelection={"multiple"}
        />
      </div>
    </>
  );
};

export default GridModel;
