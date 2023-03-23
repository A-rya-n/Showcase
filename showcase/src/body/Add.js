import * as React from "react";

import { Box, Fab, Modal, Input, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AddItem } from "./Edit";

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

const Add = () => {
  const refresh = () => window.location.reload(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [enteredName, setName] = React.useState('');
  const [enteredMdate, setMdate] = React.useState('');
  const [enteredPrice, setPrice] = React.useState('');

  const nameHandler = (e) => {
    setName(e.target.value);
  }
  const mdateHandler = (e) => {
    setMdate(e.target.value);
  }
  const priceHandler = (e) => {
    setPrice(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const itemData = {
      name: enteredName,
      mdate: enteredMdate,
      price: enteredPrice,
    };

    console.log(itemData);
    AddItem(itemData);

    
    setName("");
    setMdate("");
    setPrice("");
    handleClose();
    refresh();
  }

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 }, float: "right" }}>
        <Fab color="primary" onClick={handleOpen}>
          <AddIcon />
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
      <Typography variant="h5">Enter details</Typography>
      <Input type="text" placeholder="Product name" value={enteredName} onChange={nameHandler}/>
      <Input type="text" placeholder="Manufacturing Date" value={enteredMdate} onChange={mdateHandler}/>
      <Input type="number" placeholder="Price" value={enteredPrice} onChange={priceHandler}/>
      <Button type="submit" variant="contained">ADD ITEM</Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Add;