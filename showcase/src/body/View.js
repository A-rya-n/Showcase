import React from "react";
import { Box, InputLabel, FormControl, NativeSelect } from "@mui/material";

const View = () => {
  return (
    <Box sx={{ minWidth: 50, display: "inline-block", float: 'left', marginBottom: 5}}>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          View
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={3}>Table</option>
          <option value={2}>Graph</option>
          <option value={1}>Pie Chart</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default View;
