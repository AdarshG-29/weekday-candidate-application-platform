import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import TickIcon from "../../assets/Icons/TickIcon";
import { validSalary, currencyIcon } from "../../utils/helpers.utils";
import PopoverComponent from "../PopoverComponent/PopoverComponent";

const CardBody = ({ maxSalary, minSalary, currencyCode, jobDesc }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="p-0 m-0">
      <CardContent className="card-body">
        {minSalary && (
          <div className="d-flex flex-row align-items-center">
            <p className="salary-info">
              {`Estimated Salary: ${currencyIcon(currencyCode)}${validSalary(
                minSalary,
                maxSalary
              )} LPA`}
            </p>
            <TickIcon />
          </div>
        )}
        {jobDesc && (
          <div>
            <p className="company-desc-header">{"About Company:"}</p>
            <p className="company-desc-sub-header">{"About Us"}</p>
            <PopoverComponent
              id={id}
              textDesc={jobDesc}
              anchorEl={anchorEl}
              handleOnClick={handleOnClick}
              handleOnClose={handleOnClose}
            />
          </div>
        )}
      </CardContent>
    </div>
  );
};

export default CardBody;
