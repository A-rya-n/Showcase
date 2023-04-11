import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddShop } from "../../data/Edit";
import { TextField, Box, Typography } from "@mui/material";
import classes from "./AddForm.module.css";

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
        .required("Shop No. is required"),
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Shop name is required"),
      category: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Shop category is required"),
      mail: Yup.string()
        .email("Invalid E-mail address")
        .required("E-mail is required"),
    }),
    onSubmit: (values) => {
      AddShop(values);
      props.closeHandler();
    },
  });

  return (
    <Box
      component="form"
      sx={{ width: 500, maxWidth: "100%", "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className={classes.form}
    >
      <Typography variant="h4" className={classes.title}>
        Welcome
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        Register your shop here.
      </Typography>

      <div>
        <div>
          <TextField
            className={classes.input}
            id="no"
            type="text"
            label="Shop No."
            {...formik.getFieldProps("no")}
          />
          {formik.touched.no && formik.errors.no ? (
            <div style={{ color: "red" }}>{formik.errors.no}</div>
          ) : null}
        </div>

        <TextField
          className={classes.input}
          id="name"
          type="text"
          label="Shop Name"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <TextField
          className={classes.input}
          id="category"
          type="text"
          label="Category"
          {...formik.getFieldProps("category")}
        />
        {formik.touched.category && formik.errors.category ? (
          <div style={{ color: "red" }}>{formik.errors.category}</div>
        ) : null}

        <TextField
          className={classes.input}
          id="mail"
          type="email"
          label="E-mail"
          {...formik.getFieldProps("mail")}
        />
        {formik.touched.mail && formik.errors.mail ? (
          <div style={{ color: "red" }}>{formik.errors.mail}</div>
        ) : null}

        <button type="submit" className={classes.submit}>
          Submit
        </button>
        <button
          className={classes.close}
          type="button"
          onClick={props.closeHandler}
        >
          Close
        </button>
      </div>
    </Box>
  );
};

export default AddForm;
