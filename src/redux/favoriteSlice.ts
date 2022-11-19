import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    line: false,
    heatmap: false,
    timeSeries: false,
    pipe: false,
    grid: false,
  },
  reducers: {
    updateLine: (state: any, action) => {
      state.line = action.payload;
    },
    updateHeatmap: (state: any, action) => {
      state.heatmap = action.payload;
    },
    updateGrid: (state: any, action) => {
      state.grid = action.payload;
    },
    updateTimeSeries: (state: any, action) => {
      state.timeSeries = action.payload;
    },
    updatePipe: (state: any, action) => {
      state.pipe = action.payload;
    },

    removeComponent: (state) => {},
  },
});
export const {
  updateGrid,
  updateHeatmap,
  updateLine,
  updatePipe,
  updateTimeSeries,
  removeComponent,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
