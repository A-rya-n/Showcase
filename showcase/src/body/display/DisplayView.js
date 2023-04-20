import React, { useState } from "react";
// import * as Yup from "yup";
// import { useFormik } from "formik";

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
// import { ProductForm } from "../sub-header/AddForm";

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

// const productValidationSchema = Yup.object({
//   Pname: Yup.string()
//     .max(20, "Must be 20 characters or less")
//     .required("Product name is required"),
//   Pcategory: Yup.string()
//     .max(15, "Must be 15 characters or less")
//     .required("Product category is required"),
//   price: Yup.string().matches(
//     /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
//     "not valid number"
//   ),
//   mdate: Yup.date()
//     .min(new Date("01-01-2009"))
//     .max(new Date())
//     .required("Manufacturing data is equired"),
//   desc: Yup.string()
//     .max(100, "Description must be 100 characters or less")
//     .required("Product description must be provided"),
// });

function AddProductView() {
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
          {/* <ProductForm /> */}
          <Button
            sx={{ backgroundColor: "#F34C19", color: "white" }}
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
          <AddProductView />
        </Box>
      </Modal>
    </div>
  );
};

export default DisplayView;
