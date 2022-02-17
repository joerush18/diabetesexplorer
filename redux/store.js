import { configureStore } from "@reduxjs/toolkit";
import nutrientReducer from "./slices/nutrientSlice";

export const store = configureStore({
  reducer: {
    nutrients: nutrientReducer,
  },
});
