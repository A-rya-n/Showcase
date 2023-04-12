import React from "react";
import { useFormik } from "formik";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { GetShop } from "../../data/Edit";

const SearchBar = (props) => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (value) => {
      props.searching.map((s) => {
        if (s.name === value.search) {
          console.log(GetShop(value.search));
        }
        return null;
      });
    },
  });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        position: "relative",
        width: 500,
        maxWidth: "100%",
        backgroundColor: "darkorange",
        borderRadius: "10px",
        boxShadow: "1px 2px 3px black",
      }}
      onSubmit={formik.handleSubmit}
    >
      <IconButton
        sx={{
          display: "inline",
          position: "absolute",
          top: "10%",
          left: "1%",
        }}
        type="submit"
      >
        <SearchIcon />
      </IconButton>
      <TextField
        sx={{ width: 450, position: "absolute", left: "10%", border: "none" }}
        id="search"
        type="text"
        label="Search"
        {...formik.getFieldProps("search")}
      />
    </Box>
  );
};

export default SearchBar;
