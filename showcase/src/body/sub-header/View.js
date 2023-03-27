import * as React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const View = () => {
  const [view, setView] = React.useState("");

  const handleChange = (e) => {
    setView(e.target.value);
  };

  return (
    
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="simple-select-filled-label">View</InputLabel>
        <Select
          labelId="simple-select-filled-label"
          id="simple-select-filled"
          value={view}
          onChange={handleChange}
        >
          <MenuItem value={10}>Table</MenuItem>
          <MenuItem value={20}>Card</MenuItem>
        </Select>
      </FormControl>
    
  );
};

export default View;
