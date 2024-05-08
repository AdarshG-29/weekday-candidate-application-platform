import React from "react";
import { Popover } from "@mui/material";
import ButtonComp from "../Button/ButtonComp";

const PopoverComponent = ({
  handleOnClick,
  handleOnClose,
  textDesc,
  anchorEl,
  id,
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
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleOnClose}
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
