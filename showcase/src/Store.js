import { configureStore } from "@reduxjs/toolkit";

import darkReducer from "./features/DarkSlice";
import shopsReducer from "./features/ShopSlice";
import modalReducer from "./features/ModalSlice";

export const Store = configureStore(
  {
    reducer: {
      dark: darkReducer,
      shops: shopsReducer,
      modal: modalReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(Store.getState());
