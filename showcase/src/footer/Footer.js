import React from "react";

import { AppBar, Box, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: 0, width: 1, bottom: 0, top: 'auto' }}>
        <AppBar position="static" style={{ backgroundColor: "#343F71" }}>
          <Toolbar></Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Footer;
