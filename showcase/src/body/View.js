import * as React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const View = () => {
  const [view, setView] = React.useState("");

  const handleChange = (e) => {
    setView(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "white" }} id="simple-select">View</InputLabel>
        <Select
          style={{ borderRadius: "10px", backgroundColor: "#F34C19", margin: "1px" }}
          labelId="simple-select-label"
          id="simple-select"
          value={view}
          label="View"
          onChange={handleChange}
        >
          <MenuItem value={10}>Table</MenuItem>
          <MenuItem value={20}>Card</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default View;
