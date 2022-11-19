import themeReducer from "./themeSlice";
import favoriteReducer from "./favoriteSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    theme: themeReducer,
    favorites: favoriteReducer,
  },
});
