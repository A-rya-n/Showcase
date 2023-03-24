import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Logo from "./Logo";
import Title from "./Title";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10, width: 1 }}>
      <AppBar position="static" style={{backgroundColor: "#343F71"}}>
        <Toolbar>
          <Logo />
          <Title />
          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
