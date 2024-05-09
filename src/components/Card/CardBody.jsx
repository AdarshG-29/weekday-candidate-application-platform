import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import TickIcon from "../../assets/Icons/TickIcon";
import { validSalary, currencyIcon } from "../../utils/helper.utils";
import PopoverComponent from "../PopoverComponent/PopoverComponent";

const CardBody = ({ maxSalary, minSalary, currencyCode, jobDesc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (event) => {
    setIsOpen(true);
  };

  const handleOnClose = (event, reason) => {
    setIsOpen(false);
  };
  const id = isOpen ? "simple-popover" : undefined;
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
              isOpen={isOpen}
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
