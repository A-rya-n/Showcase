import React, { useState } from "react";

import { Box, Button, Drawer } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { createTheme } from "@mui/system";
import AddForm from "./AddForm";

const btn = createTheme({
  palette: {
    primary: {
      main: "#F34C19",
    },
  },
});

const style = {
  width: 500,
  height: '100%',
  bgcolor: "#FEFF86",
  p: 4,
};

const Add = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

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
      <Drawer open={isDrawerOpen} onClose={closeDrawer} anchor={"right"}>
        <Box sx={style}>
          <AddForm closeHandler={closeDrawer} openHandler={openDrawer} />
        </Box>
      </Drawer>
    </div>
  );
};

export default Add;
