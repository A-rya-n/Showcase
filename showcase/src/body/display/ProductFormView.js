import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AddProduct } from "../../data/Edit";

import { Typography, TextField, Button, Divider } from "@mui/material";
import classes from "./ProductFormView.module.css";

const productValidationSchema = Yup.object({
  Pname: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Product name is required"),
  Pcategory: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Product category is required"),
  price: Yup.string().matches(
    /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
    "not valid number"
  ),
  mdate: Yup.date()
    .min(new Date("01-01-2009"))
    .max(new Date())
    .required("Manufacturing data is equired"),
  desc: Yup.string()
    .max(100, "Description must be 100 characters or less")
    .required("Product description must be provided"),
});

const ProductFormView = (props) => {
  const [disabled, setDisable] = useState(false);
  const Productformik = useFormik({
    initialValues: {
      Pname: "",
      Pcategory: "",
      price: "",
      mdate: "",
      desc: "",
      Sno: props.shopID,
      Sname: props.shopName,
    },
    validationSchema: productValidationSchema,
    onSubmit: (values) => {
      AddProduct(values);
    },
  });

  return (
    <>
      <Typography variant="h5" sx={{ margin: 3, marginLeft: 19 }}>
        Product Details
      </Typography>
      <Divider
        variant="middle"
        sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "white" }}
      />
      <div>
        <TextField
          className={classes.input}
          sx={{ marginBottom: 1 }}
          id="Pname"
          type="text"
          label="Product Name"
          {...Productformik.getFieldProps("Pname")}
        />
        {Productformik.touched.Pname && Productformik.errors.Pname ? (
          <div style={{ color: "red" }}>{Productformik.errors.Pname}</div>
        ) : null}

        <TextField
          className={classes.input}
          sx={{ marginBottom: 1 }}
          id="Pcategory"
          type="text"
          label="Product Category"
          {...Productformik.getFieldProps("Pcategory")}
        />
        {Productformik.touched.Pcategory && Productformik.errors.Pcategory ? (
          <div style={{ color: "red" }}>{Productformik.errors.Pcategory}</div>
        ) : null}

        <TextField
          className={classes.input}
          sx={{ marginBottom: 1 }}
          id="price"
          type="number"
          label="Product Price"
          {...Productformik.getFieldProps("price")}
        />
        {Productformik.touched.price && Productformik.errors.price ? (
          <div style={{ color: "red" }}>{Productformik.errors.price}</div>
        ) : null}

        <TextField
          className={classes.input}
          sx={{ marginBottom: 1 }}
          id="mdate"
          type="date"
          label="Manufacturing Date"
          {...Productformik.getFieldProps("mdate")}
        />
        {Productformik.touched.mdate && Productformik.errors.mdate ? (
          <div style={{ color: "red" }}>{Productformik.errors.mdate}</div>
        ) : null}

        <TextField
          className={classes.input}
          id="desc"
          type="text"
          label="Product Description"
          {...Productformik.getFieldProps("desc")}
        />
        {Productformik.touched.desc && Productformik.errors.desc ? (
          <div style={{ color: "red" }}>{Productformik.errors.desc}</div>
        ) : null}
      </div>
      <Button
        className={classes.submit}
        disabled={disabled}
        sx={{
          backgroundColor: "#f34c19",
          "&:hover": { backgroundColor: "#8b2000" },
          color: "white",
          marginRight: 4,
          margin: 3,
        }}
        type="button"
        onClick={() => {
          if (Productformik.dirty) {
            Productformik.handleSubmit();
            setDisable(true);
          } else return;
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default ProductFormView;
