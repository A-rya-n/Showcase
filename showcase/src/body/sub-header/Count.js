import React from "react";
import { Typography, Box } from "@mui/material";

const style = {
  position: "relative",
  m: 1,
  padding: 0,
  minWidth: 120,
  bgcolor: "#F34C19",
  borderRadius: "10px",
  boxShadow: "1px 2px 3px black",
};

const Count = (props) => {
  return (
    <Box sx={style}>
      <Typography
        sx={{
          color: "white",
          position: "absolute",
          top: "25%",
          left: "20%",
        }}
        variant="button"
      >
        SHOPS : {props.counting.length}
      </Typography>
    </Box>
  );
};

export default Count;
