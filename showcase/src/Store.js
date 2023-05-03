import { configureStore } from "@reduxjs/toolkit";

import darkReducer from "./features/DarkSlice";

export const Store = configureStore({
  reducer: {
    dark: darkReducer
  },
});
