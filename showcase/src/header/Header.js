import React from "react";

import { AppBar, Box, Toolbar } from "@mui/material";

import Logo from "./Logo";
import Title from "./Title";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10, width: 1 }}>
      <AppBar position="static" style={{backgroundColor: "#343F71"}}>
        <Toolbar>
          <Logo />
          <Title />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
