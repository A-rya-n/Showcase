import React from "react";

import { Box, Button, Drawer } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { createTheme } from "@mui/system";
import AddForm from "./AddForm";
import { useDispatch, useSelector } from "react-redux";
import { openModal, hideModal } from "../../features/ModalSlice";

const btn = createTheme({
  palette: {
    primary: {
      main: "#F34C19",
    },
  },
});

const style = {
  width: 500,
  height: "100%",
  bgcolor: "#FEFF86",
  p: 4,
};

const Add = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const openDrawer = () => {
    dispatch(openModal());
  };

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Button
          sx={{ backgroundColor: (theme) => btn.palette.primary.main }}
          variant="contained"
          onClick={openDrawer}
        >
          ADD <AddIcon />
        </Button>
      </Box>
      <Drawer
        open={isOpen}
        onClose={() => dispatch(hideModal())}
        anchor={"right"}
      >
        <Box sx={style}>
          <AddForm />
        </Box>
      </Drawer>
    </div>
  );
};

export default Add;
