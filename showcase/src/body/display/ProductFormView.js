import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AddProduct } from "../../data/Edit";

import { Typography, TextField } from "@mui/material";

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
      <Typography variant="h5">Register your product here...</Typography>

      <div>
        <TextField
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
          sx={{ marginBottom: 1 }}
          id="mdate"
          type="date"
          // label="Product Manufacturing date"
          {...Productformik.getFieldProps("mdate")}
        />
        {Productformik.touched.mdate && Productformik.errors.mdate ? (
          <div style={{ color: "red" }}>{Productformik.errors.mdate}</div>
        ) : null}

        <TextField
          id="desc"
          type="text"
          label="Product Description"
          {...Productformik.getFieldProps("desc")}
        />
        {Productformik.touched.desc && Productformik.errors.desc ? (
          <div style={{ color: "red" }}>{Productformik.errors.desc}</div>
        ) : null}
      </div>
      <button
        type="button"
        onClick={() => {
          if (Productformik.dirty) {
            Productformik.handleSubmit();
          } else return;
        }}
      >
        Submit
      </button>
    </>
  );
};

export default ProductFormView;