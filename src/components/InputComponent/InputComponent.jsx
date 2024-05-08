import React from "react";
import { OutlinedInput } from "@mui/material";
const InputComponent = ({ onChange, placeholder, className }) => {
  return (
    <div>
      <OutlinedInput
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        size="small"
      />
    </div>
  );
};

export default InputComponent;
