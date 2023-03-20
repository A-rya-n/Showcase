import React from "react";

import { IconButton } from "@mui/material";
import { AdjustRounded } from "@mui/icons-material";

const Logo = () => {
  return (
    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
      <AdjustRounded />
    </IconButton>
  );
};

export default Logo;
