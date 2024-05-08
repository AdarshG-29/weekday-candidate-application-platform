import React from "react";
import { Chip } from "@mui/material";
import "./chipComp.css";

const ChipComp = ({ postDate, icon, className }) => {
  return (
    <Chip
      label={postDate}
      variant="outlined"
      avatar={icon}
      className={className}
    />
  );
};

export default ChipComp;
