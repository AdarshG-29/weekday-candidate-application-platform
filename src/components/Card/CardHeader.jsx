import React from "react";
import { CardHeader } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const Header = ({ jobRole, location, companyName, logoUrl }) => {
  return (
    <div>
      <CardHeader
        className={"card-header d-flex align-items-start"}
        title={
          <div className="">
            <h3>{companyName}</h3>
            <h2>{jobRole}</h2>
            <p>{location}</p>
          </div>
        }
        avatar={
          <CardMedia
            sx={{ height: 40 }}
            src={logoUrl}
            alt={"logo"}
            component="img"
          />
        }
      />
    </div>
  );
};

export default Header;
