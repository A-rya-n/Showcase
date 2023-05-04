import React from "react";
import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

const style = {
  position: "relative",
  m: 1,
  padding: 0,
  minWidth: 120,
  bgcolor: "#F34C19",
  borderRadius: "10px",
  boxShadow: "1px 2px 3px black",
};

const Count = () => {
  const data = useSelector((state) => state.data.data);
  // console.log("Count.js log: ", data);
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
        SHOPS : {data.length}
      </Typography>
    </Box>
  );
};

export default Count;
