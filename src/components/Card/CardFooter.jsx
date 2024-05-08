import { CardActions } from "@mui/material";
import React from "react";
import ButtonComp from "../Button/ButtonComp";

const CardFooter = ({ minExp, maxExp, jobLink }) => {
  const handleOnClick = () => {
    window.open(jobLink, "_blank");
  };
  return (
    <div className="w-100 card-footer">
      {(minExp || maxExp) && (
        <div className="d-flex flex-column">
          <span className="job-exp">{"Minimum Experience"}</span>
          <span className="min-salary">{`${
            minExp ? minExp : maxExp
          } years`}</span>
        </div>
      )}

      <CardActions className="d-flex flex-column card-action justify-content-start align-items-center">
        <ButtonComp
          variant="contained"
          label={"Easy Apply"}
          onClick={handleOnClick}
          className="card-footer-apply-button"
        />
        <ButtonComp
          variant="contained"
          color="primary"
          onClick={handleOnClick}
          label={"Unlock referral asks"}
          className="card-footer-referral-button"
        />
      </CardActions>
    </div>
  );
};

export default CardFooter;
