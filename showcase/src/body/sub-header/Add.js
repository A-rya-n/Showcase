import React, { useState } from "react";

import { Box, Button, Drawer, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { createTheme } from "@mui/system";
import AddForm from "./AddForm";
// import { AddItem } from "../../data/Edit";

const btn = createTheme({
  palette: {
    primary: {
      main: "#F34C19",
    },
  },
});

const Add = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Button
          sx={{ backgroundColor: (theme) => btn.palette.primary.main }}
          variant="contained"
          onClick={() => setIsDrawerOpen(true)}
        >
          ADD <AddIcon />
        </Button>
      </Box>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="550px" textAlign="center" role="presentation">
          <AddForm/>
        </Box>
      </Drawer>
    </div>
  );
};

export default Add;
