import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddShop } from "../../data/Edit";
import { Button, TextField, Box, Typography } from "@mui/material";

const AddForm = (props) => {
  const formik = useFormik({
    initialValues: {
      no: "",
      name: "",
      category: "",
      mail: "",
    },
    validationSchema: Yup.object({
      no: Yup.string()
        .max(4, "Must be 4 characters or less")
        .required("Required"),
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      category: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      mail: Yup.string().email("Invalid E-mail address").required("Required"),
    }),
    onSubmit: (values) => {
      AddShop(values);
    },
  });

  return (
    <Box
      component="form"
      sx={{ width: 500, maxWidth: "100%", "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h5">Register</Typography>
      <div>
        <label htmlFor="no">Shop No.</label>
        <TextField
          id="no"
          // name="no"
          type="text"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.no}
          {...formik.getFieldProps("no")}
        />
        {formik.touched.no && formik.errors.no ? (
          <div>{formik.errors.no}</div>
        ) : null}
        <label htmlFor="name">Shop Name</label>
        <TextField id="name" type="text" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="category">Category</label>
        <TextField
          id="category"
          type="text"
          {...formik.getFieldProps("category")}
        />
        {formik.touched.category && formik.errors.category ? (
          <div>{formik.errors.category}</div>
        ) : null}
        <label htmlFor="mail">E-mail</label>
        <TextField id="mail" type="email" {...formik.getFieldProps("mail")} />
        {formik.touched.mail && formik.errors.mail ? (
          <div>{formik.errors.mail}</div>
        ) : null}

        <Button
          type="button"
          color="error"
          variant="contained"
          onClick={props.closeHandler}
        >
          Close
        </Button>
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default AddForm;
