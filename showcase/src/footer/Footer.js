import React from "react";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Logo from "../header/Logo";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ flexGrow: 1, marginBottom: 0, width: 1, bottom: 0, top: "auto" }}
      >
        <AppBar position="static" style={{ backgroundColor: "#343F71" }}>
          <Toolbar>
            <Logo style={{ margin: 0 }} />
            <span>
              -----------------------------------------------------------------------------------------------{" "}
            </span>
            <Typography variant="h6" sx={{ marginLeft: 3, marginRight: 3 }}>
              FOOTER
            </Typography>
            <span style={{ marginRight: 20 }}>
              -----------------------------------------------------------------------------------------------
            </span>
            <Logo />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Footer;
