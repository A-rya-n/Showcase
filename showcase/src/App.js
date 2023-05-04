import React, { useContext } from "react";

import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import "./index.css";
import { DarkModeContext } from "./dark-mode/DarkMode";

const App = () => {
  const { dark } = useContext(DarkModeContext);
  return (
    <div className={dark ? "dark" : "light"}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
