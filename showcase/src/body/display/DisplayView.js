import React, { useState } from "react";

import Box from "@mui/material/Box";
import {
  Typography,
  Modal,
  Backdrop,
  Divider,
  Chip,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DisplayProduct from "./DisplayProduct";
import ProductFormView from "./ProductFormView";

const style = {
  bgcolor: "#343F71",
  color: "#eee",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  border: "none",
  boxShadow: 2,
  borderRadius: "15px",
  p: 4,
};

function AddProductView(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ margin: 1, display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ backgroundColor: "#F34C19", color: "white" }}
          onClick={handleOpen}
        >
          ADD PRODUCT <AddIcon />
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 500 }}>
          <ProductFormView shopID={props.Snum} shopName={props.Snam} />
          <Button
            sx={{
              backgroundColor: "darkred",
              color: "white",
              borderRadius: "5px",
              border: 0,
              boxSizing: "border-box",
              fontSize: "14px",
              height: "50px",
              marginTop: "8px",
              textAlign: "center",
              width: "90%",
              marginLeft: "22px",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}

const DisplayView = (props) => {
  return (
    <div>
      <Backdrop
        open={props.opened}
        sx={{ backgroundColor: "rgba( 0 , 0 , 0 , 0.3 )", zIndex: 0 }}
        onClick={props.close}
      />

      <Modal
        open={props.opened}
        onClose={props.close}
        sx={{ "& .MuiBackdrop-root": { backgroundColor: "transparent" } }}
      >
        <Box sx={style}>
          <Typography
            variant="h1"
            sx={{
              backgroundColor: "#F34C19",
              borderRadius: "10px",
              width: "fit-content",
              padding: 2,
            }}
          >
            {props.details.no}
          </Typography>
          <Divider
            variant="middle"
            sx={{ backgroundColor: "white", marginTop: 3, marginBottom: 3 }}
          />
          <Typography
            variant="h3"
            sx={{
              width: "fit-content",
              padding: 2,
              display: "inline",
              marginRight: 2,
            }}
          >
            {props.details.name}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              width: "fit-content",
              padding: 2,
              display: "inline",
            }}
          >
            {props.details.category}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "fit-content",
              padding: 2,
              marginTop: 3,
            }}
          >
            {props.details.mail}
          </Typography>
          <Divider variant="middle" sx={{ marginTop: 3, marginBottom: 3 }}>
            <Chip label="PRODUCTS" sx={{ color: "white" }} />
          </Divider>
          <DisplayProduct Snum={props.details.no} Snam={props.details.name} />
          <AddProductView Snum={props.details.no} Snam={props.details.name} />
        </Box>
      </Modal>
    </div>
  );
};

export default DisplayView;
