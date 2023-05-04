import { configureStore } from "@reduxjs/toolkit";

import darkReducer from "./features/DarkSlice";

export const Store = configureStore(
  {
    reducer: {
      dark: darkReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
