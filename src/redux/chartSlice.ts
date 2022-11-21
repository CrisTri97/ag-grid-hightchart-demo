import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    charts: [
      {
        id: 0,
        isFavorited: false,
        chartName: "Grid",
        chartTitle: "Ag Grig",
      },
      {
        id: 1,
        isFavorited: false,
        chartName: "Line",
        chartTitle: "Line Chart",
      },
      {
        id: 2,
        isFavorited: false,
        chartName: "Pipe",
        chartTitle: "Pipe Chart",
      },
      {
        id: 3,
        isFavorited: false,
        chartName: "Heatmap",
        chartTitle: "Heatmap Chart",
      },
      {
        id: 4,
        isFavorited: false,
        chartName: "TimeSeries",
        chartTitle: "Time Series Chart",
      },
    ],
  },
  reducers: {
    updateChart: (state, action) => {
      state.charts[
        state.charts.findIndex((item) => item.id === action.payload.id)
      ].isFavorited = action.payload.isFavorited;
    },
  },
});
export const { updateChart } = favoriteSlice.actions;
export default favoriteSlice.reducer;
