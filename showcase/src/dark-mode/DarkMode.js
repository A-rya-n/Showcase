import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const ToggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, ToggleMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </>
  );
};

export { DarkModeContext, DarkModeProvider };
