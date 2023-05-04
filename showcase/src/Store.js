import { configureStore } from "@reduxjs/toolkit";

import darkReducer from "./features/DarkSlice";
import dataReducer from "./features/DataSlice";

export const Store = configureStore(
  {
    reducer: {
      dark: darkReducer,
      data: dataReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(Store.getState());
