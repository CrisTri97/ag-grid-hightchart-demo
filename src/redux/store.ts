import themeReducer from "./themeSlice";
import favoriteReducer from "./chartSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    theme: themeReducer,
    favorites: favoriteReducer,
  },
});
