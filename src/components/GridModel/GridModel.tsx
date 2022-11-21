import { ColDef, ValueFormatterParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { ChartIProps, CovidData, rootState } from "../../../interface";
import Title from "../Title/Title";
import "./GridModel.scss";

const GridModel: React.FC<ChartIProps> = ({ id, isFavorited, chartTitle }) => {
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

  const rowClass = "my-row";

  return (
    <>
      <div className={`model ag-theme-balham${darkMode ? "" : "-dark"}`}>
        <Title chartTitle={chartTitle} id={id} isFavorited={isFavorited} />
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
