import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./ItemSlice";

export const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});
