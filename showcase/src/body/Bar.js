import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

import View from "./View";
import Add from "./Add";

const Bar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: 1 / 2,
        margin: 5
      }}
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: "#343F71",
          borderRadius: 25,
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View />
          <Add />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Bar;
