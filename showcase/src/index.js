import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.js";
import "./index.css";
import { Store } from "./Store.js";
import { Provider } from "react-redux";
import { DarkModeProvider } from "./dark-mode/DarkMode.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <DarkModeProvider>
      {" "}
      <App />{" "}
    </DarkModeProvider>
  </Provider>
);
