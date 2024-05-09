import React from "react";
import { Box, Typography } from "@mui/material";

const RenderEmptyText = () => {
  return (
    <Box className="d-flex justify-content-center align-items-center empty-container">
      <Typography variant="h1">
        No Jobs available for this category at the moment
      </Typography>
    </Box>
  );
};

export default RenderEmptyText;
