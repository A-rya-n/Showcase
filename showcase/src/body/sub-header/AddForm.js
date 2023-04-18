import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddShop } from "../../data/Edit";
import { AddProduct } from "../../data/Edit";
import {
  TextField,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import classes from "./AddForm.module.css";

const steps = ["Shop Details", "Product Details", "Finish"];

const shopValidationSchema = Yup.object({
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
});

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

export const ShopForm = (props) => {
  const Shopformik = useFormik({
    initialValues: {
      no: "",
      name: "",
      category: "",
      mail: "",
    },
    validationSchema: shopValidationSchema,
    onSubmit: (values) => {
      AddShop(values);
    },
  });

  return (
    <>
      <Typography variant="h4" className={classes.title} sx={{ marginTop: 10 }}>
        Welcome
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        Register your shop here.
      </Typography>

      <div>
        <TextField
          sx={{ marginBottom: 1 }}
          className={classes.input}
          id="no"
          type="text"
          label="Shop No."
          {...Shopformik.getFieldProps("no")}
        />
        {Shopformik.touched.no && Shopformik.errors.no ? (
          <div style={{ color: "red" }}>{Shopformik.errors.no}</div>
        ) : null}

        <TextField
          sx={{ marginBottom: 1 }}
          className={classes.input}
          id="name"
          type="text"
          label="Shop Name"
          {...Shopformik.getFieldProps("name")}
        />
        {Shopformik.touched.name && Shopformik.errors.name ? (
          <div style={{ color: "red" }}>{Shopformik.errors.name}</div>
        ) : null}

        <TextField
          sx={{ marginBottom: 1 }}
          className={classes.input}
          id="category"
          type="text"
          label="Category"
          {...Shopformik.getFieldProps("category")}
        />
        {Shopformik.touched.category && Shopformik.errors.category ? (
          <div style={{ color: "red" }}>{Shopformik.errors.category}</div>
        ) : null}

        <TextField
          className={classes.input}
          id="mail"
          type="email"
          label="E-mail"
          {...Shopformik.getFieldProps("mail")}
        />
        {Shopformik.touched.mail && Shopformik.errors.mail ? (
          <div style={{ color: "red" }}>{Shopformik.errors.mail}</div>
        ) : null}
      </div>
      <button
        // type="submit"
        type="button"
        className={classes.submit}
        onClick={() => {
          props.shopHandler(Shopformik);
        }}
      >
        Submit
      </button>
    </>
  );
};

export const ProductForm = (props) => {
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
      <Typography variant="h5" className={classes.subtitle}>
        Register your product here...
      </Typography>

      <div>
        <TextField
          sx={{ marginBottom: 1 }}
          className={classes.input}
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
          className={classes.input}
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
          className={classes.input}
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
          className={classes.input}
          id="mdate"
          type="date"
          // label="Product Manufacturing date"
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
      <button
        type="button"
        className={classes.submit}
        onClick={() => props.productHandler(Productformik)}
      >
        Submit
      </button>
    </>
  );
};

export const Finished = () => {
  return (
    <Typography sx={{ mt: 2, mb: 1 }}>
      All steps completed - you&apos;re finished
    </Typography>
  );
};

const AddForm = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [shopForm, setShopForm] = useState("");
  const [productForm, setProductForm] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const shopFormHandler = (forms) => {
    setShopForm(forms);
  };
  const productFormHandler = (forms) => {
    setProductForm(forms);
  };

  const handleSubmit = () => {
    if (shopForm.values) {
      shopForm.handleSubmit();
    }
    if (productForm.values) {
      productForm.handleSubmit();
    }
    return;
  };

  const closing = () => {
    props.closeHandler();
    window.location.reload();
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ShopForm shopHandler={shopFormHandler} />;
      case 1:
        return (
          <ProductForm
            productHandler={productFormHandler}
            shopID={shopForm.values?.no}
            shopName={shopForm.values?.name}
          />
        );
      case 2:
        return <Finished />;
      default:
        return "Error";
    }
  };

  const stepIcons = (step) => {
    switch (step) {
      case 0:
        return <AddShoppingCartIcon />;
      case 1:
        return <CategoryIcon />;
      case 2:
        return <CheckCircleOutlineIcon />;
      default:
        return "Error";
    }
  };

  return (
    <Box
      component="form"
      sx={{ width: 500, maxWidth: "100%", "& > :not(style)": { m: 2 } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      className={classes.form}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          return (
            <Step key={label}>
              {/* <StepLabel StepIconComponent={stepIcons(activeStep)}>
                {label}
              </StepLabel> */}
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <button
              type="button"
              className={classes.close}
              onClick={() => closing()}
            >
              Close
            </button>
          </Box>
        </>
      ) : (
        <>
          {getStepContent(activeStep)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? (
                <Typography
                  type="submit"
                  // className={classes.close}
                  onClick={() => handleSubmit()}
                >
                  Finish
                </Typography>
              ) : (
                "Next"
              )}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default AddForm;
