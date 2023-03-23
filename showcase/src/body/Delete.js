import * as React from "react";

import { Box, Fab, Modal, Input, Typography, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteItem } from "./Edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Delete = () => {
  const refresh = () => window.location.reload(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [enteredId, setId] = React.useState('');

  const idHandler = (e) => {
    setId(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    deleteItem(enteredId)
    setId('');
    handleClose();
    refresh();
    
  }

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 }, float: "right" }}>
        <Fab color="secondary" onClick={handleOpen}>
          <DeleteIcon />
        </Fab>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Forms are here --> */}
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <Input type="number" placeholder="Enter ID" value={enteredId} onChange={idHandler}/>
      <Button type="submit" variant="contained">DELETE ITEM</Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Delete;
