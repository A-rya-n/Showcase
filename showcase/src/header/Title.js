import React from "react";

import { Typography } from "@mui/material";

const Title = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
    >
      SHOWCASE
    </Typography>
  );
};

export default Title;
