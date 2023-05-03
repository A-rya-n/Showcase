import React, { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../features/DarkSlice";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const dark = useSelector((state) => state.dark.value);
  const dispatch = useDispatch();

  // const [darkMode, setDarkMode] = useState(false);
  const ToggleMode = () => {
    // setDarkMode(!darkMode);
    dispatch(toggle());
  };
  return (
    <>
      <DarkModeContext.Provider value={{ dark, ToggleMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </>
  );
};

export { DarkModeContext, DarkModeProvider };
