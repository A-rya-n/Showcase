import React, { useContext } from "react";

import Header from "./header/Header";
import Body from "./body/Body";
import "./index.css";
import { DarkModeContext } from "./dark-mode/DarkMode";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
      <Body />
    </div>
  );
};

export default App;
