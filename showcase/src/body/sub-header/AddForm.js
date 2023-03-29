import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { AddShop } from "../../data/Edit";
import { Button, TextField, Box, Typography } from "@mui/material";

const AddForm = () => {
  const { register, errors } = useForm();
  const [values, setValues] = useState({
    no: "",
    name: "",
    category: "",
    mail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    AddShop(values);
    console.log(values)

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
          inputRef = {...register({required: 'error message'})}
          error={Boolean(errors.no)}
          helperText={errors.no?.message}
          onChange={(e) =>
            setValues({ ...values, no: e.target.value })
          }
        />
        <TextField
          required = {true}
          name="name"
          label="Shop Name"
          defaultValue={values.name}
          margin="normal"
          onChange={(e) =>
            setValues({ ...values, name: e.target.value })
          }
        />
        <TextField
          required = {true}
          name="category"
          label="Shop Category"
          defaultValue={values.category}
          margin="normal"
          onChange={(e) =>
            setValues({ ...values, category: e.target.value })
          }
        />
        <TextField
          required = {true}
          name="mail"
          label="E-mail"
          defaultValue={values.mail}
          fullWidth
          margin="normal"
          onChange={(e) =>
            setValues({ ...values, mail: e.target.value })
          }
        />
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default AddForm;
