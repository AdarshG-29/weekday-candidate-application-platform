import React, { useState } from "react";
import { filterOptions } from "../../constants/filterOptions";
import Dropdown from "../Dropdown";
import InputComponent from "../InputComponent";

const JobFilters = () => {
  const [filterState, setFilterState] = useState({});

  const handleOnSelectFilter = (filterLabel) => (event, value) => {
    const newFilterState = { ...filterState, [filterLabel]: value };
    setFilterState(newFilterState);
  };
  const handleOnInputFilter = (filterLabel) => (event) => {
    const newFilterState = {
      ...filterState,
      [filterLabel]: event.target.value,
    };
    setFilterState(newFilterState);
  };

  return (
    <div className="w-100 d-flex flex-wrap justify-content-start p-2 m-auto">
      {filterOptions.map((ele, index) => {
        return (
          <Dropdown
            isMultiple={ele.multiple}
            filterOptions={ele.options}
            placeHolder={ele.label}
            label={ele.label}
            onChange={handleOnSelectFilter(ele.value)}
            key={index}
            className={"p-quarter filter"}
          />
        );
      })}
      <div className="p-quarter filter">
        <InputComponent
          onChange={handleOnInputFilter("companyName")}
          className={"w-100 h-100"}
          placeholder={"Search Company Name"}
        />
      </div>
      <div className="p-quarter filter">
        <InputComponent
          onChange={handleOnInputFilter("location")}
          className={"w-100 h-100 location-filter"}
          placeholder={"location"}
        />
      </div>
    </div>
  );
};

export default JobFilters;
