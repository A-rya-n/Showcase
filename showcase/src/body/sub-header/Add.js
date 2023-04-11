import React, { useState } from "react";

import { Box, Button, Drawer } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { createTheme } from "@mui/system";
import AddForm from "./AddForm";
// import drawerImage from "../../assets/off-white.jpg";

const btn = createTheme({
  palette: {
    primary: {
      main: "#F34C19",
    },
  },
});

const style = {
  width: 500,
  bgcolor: "background.paper",
  p: 4,
};
// const styles = (theme) => ({
//   drawerPaper: {
//     backgroundImage: `url(${drawerImage})`,
//   },
// });

const Add = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawer = () => {
    setIsDrawerOpen(false);
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
      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        anchor={"right"}
        // className={styles.drawerPaper}
      >
        <Box sx={style}>
          <AddForm closeHandler={closeDrawer} />
        </Box>
      </Drawer>
    </div>
  );
};

export default Add;
