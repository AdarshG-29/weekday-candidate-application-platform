import React, { useState, useEffect } from "react";
import { filterOptions } from "../../constants/filterOptions";
import Dropdown from "../Dropdown";
import InputComponent from "../InputComponent";
import "./jobFilters.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/jobApplication.action";

const JobFilters = () => {
  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState({});

  //dispatch an action to store the selected filters into redux
  useEffect(() => {
    dispatch(setFilters(filterState));
  }, [filterState, dispatch]);

  //set dropdown values into dropdownField filters.
  const handleOnSelectFilter = (filterLabel) => (event, value) => {
    const newFilterState = { ...filterState, [filterLabel]: value };
    setFilterState(newFilterState);
  };
  //setting input value as onchange filter
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
          placeholder={"Search Location"}
        />
      </div>
    </div>
  );
};

export default JobFilters;
