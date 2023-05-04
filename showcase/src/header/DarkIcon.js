import React, { useContext } from "react";

import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkModeContext } from "../dark-mode/DarkMode";

const Dark = () => {
  const { dark, ToggleMode } = useContext(DarkModeContext);
  const handleClick = () => {
    ToggleMode();
  };
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      sx={{ mr: 2 }}
      onClick={handleClick}
    >
      {dark ? <Brightness4Icon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default Dark;
