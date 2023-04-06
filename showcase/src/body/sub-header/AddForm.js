import React, { useState } from "react";
import { AddShop } from "../../data/Edit";
import { Button, TextField, Box, Typography } from "@mui/material";

const AddForm = (props) => {
  const [values, setValues] = useState({
    no: "",
    name: "",
    category: "",
    mail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    AddShop(values);

    setValues({
      no: "",
      name: "",
      category: "",
      mail: "",
    });
  };

  return (
    <Box
      component="form"
      sx={{ width: 500, maxWidth: "100%", "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5">Form</Typography>
      <div>
        <TextField
          name="no"
          label="Shop Number"
          defaultValue={values.no}
          fullWidth
          margin="normal"
          onChange={(e) => setValues({ ...values, no: e.target.value })}
        />
        <TextField
          required={true}
          name="name"
          label="Shop Name"
          defaultValue={values.name}
          margin="normal"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <TextField
          required={true}
          name="category"
          label="Shop Category"
          defaultValue={values.category}
          margin="normal"
          onChange={(e) => setValues({ ...values, category: e.target.value })}
        />
        <TextField
          required={true}
          name="mail"
          label="E-mail"
          defaultValue={values.mail}
          fullWidth
          margin="normal"
          onChange={(e) => setValues({ ...values, mail: e.target.value })}
        />
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
