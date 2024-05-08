import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./dropdown.css";

const Dropdown = ({
  filterOptions,
  placeholder,
  label,
  onChange,
  isMultiple,
  className,
}) => {
  return (
    <div className={className}>
      <Autocomplete
        multiple={isMultiple}
        id="tags-outlined"
        options={filterOptions}
        onChange={onChange}
        className="w-100 h-100 dropdown-input"
        filterSelectedOptions
        size="small"
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label={label} placeholder={placeholder} />
        )}
      />
    </div>
  );
};

export default Dropdown;
