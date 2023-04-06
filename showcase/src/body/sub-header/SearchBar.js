import React from "react";
import { Box, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label="Search" variant="standard" />
    </Box>
  );
};

export default SearchBar;
