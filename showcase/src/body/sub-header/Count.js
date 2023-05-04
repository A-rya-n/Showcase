import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchShops } from "../../features/ShopSlice";

const style = {
  position: "relative",
  m: 1,
  padding: 0,
  minWidth: 120,
  bgcolor: "#F34C19",
  borderRadius: "10px",
  boxShadow: "1px 2px 3px black",
};

const Count = () => {
  const shops = useSelector((state) => state.shops.shops);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  return (
    <Box sx={style}>
      <Typography
        sx={{
          color: "white",
          position: "absolute",
          top: "25%",
          left: "20%",
        }}
        variant="button"
      >
        SHOPS : {shops.length}
      </Typography>
    </Box>
  );
};

export default Count;
