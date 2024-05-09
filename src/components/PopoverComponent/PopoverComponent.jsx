import React from "react";
import { Popover } from "@mui/material";
import ButtonComp from "../Button/ButtonComp";
import "./popoverComponent.css";
const PopoverComponent = ({
  handleOnClick,
  handleOnClose,
  textDesc,
  id,
  isOpen,
}) => {
  return (
    <div>
      <p className="company-desc-content">
        {textDesc.length > 440 ? textDesc.slice(0, 337) + "..." : textDesc}
      </p>
      {textDesc.length > 440 && (
        <div>
          <Popover
            id={id}
            open={isOpen}
            onClose={handleOnClose}
            className={`popover-box`}
            anchorReference="none"
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
          >
            <p>{textDesc}</p>
          </Popover>
          <ButtonComp
            aria-describedby={id}
            size={"small"}
            onClick={handleOnClick}
            label={"Show More"}
          />
        </div>
      )}
    </div>
  );
};

export default PopoverComponent;
