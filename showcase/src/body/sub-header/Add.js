import React, { useState } from "react";

import { Box, Button, Modal } from "@mui/material";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Button
          sx={{ backgroundColor: (theme) => btn.palette.primary.main }}
          variant="contained"
          onClick={() => setIsModalOpen(true)}
        >
          ADD <AddIcon />
        </Button>
      </Box>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box sx={style}>
          <AddForm />
        </Box>
      </Modal>
    </div>
  );
};

export default Add;
