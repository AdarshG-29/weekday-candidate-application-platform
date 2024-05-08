import React from "react";
import Card from "@mui/material/Card";
import HourGlass from "../../assets/HourGlass";
import ChipComp from "../Chip/ChipComp";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import "./card.css";

const JobCard = ({
  jobLink,
  jobDesc,
  jobId,
  maxSalary,
  minSalary,
  currencyCode,
  location,
  minExp,
  maxExp,
  jobRole,
  companyName,
  logoUrl,
  postDate,
}) => {
  return (
    <Card className="d-flex flex-column p-1 card justify-content-between">
      <ChipComp
        postDate={postDate}
        icon={<HourGlass />}
        className={"card-chip"}
      />
      <CardHeader
        location={location}
        jobRole={jobRole}
        companyName={companyName}
        logoUrl={logoUrl}
      />
      <CardBody
        maxSalary={maxSalary}
        minSalary={minSalary}
        currencyCode={currencyCode}
        jobDesc={jobDesc}
      />
      <CardFooter minExp={minExp} maxExp={maxExp} jobLink={jobLink} />
    </Card>
  );
};

export default JobCard;
