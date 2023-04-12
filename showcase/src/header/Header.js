import React from "react";

import { AppBar, Box, Toolbar } from "@mui/material";

import Logo from "./Logo";
import Title from "./Title";
import Summary from "./Summary";
import Dark from "./DarkIcon";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: 0, width: 1 }}>
        <AppBar position="fixed" style={{ backgroundColor: "#343F71" }}>
          <Toolbar>
            <Logo />
            <Title />
            <Dark />
          </Toolbar>
        </AppBar>
      </Box>
      <Summary />
    </>
  );
};

export default Header;
