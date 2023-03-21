import * as React from "react";
import { Button, ButtonGroup } from "@mui/material";

const Edit = () => {
  return (
    <ButtonGroup variant="contained" sx={{float: 'right', marginBottom: 5}}>
      <Button>Add</Button>
      <Button>Delete</Button>
    </ButtonGroup>
  );
};

export default Edit;
