import React, { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";

const JobListing = () => {
  const [filterJobList, setFilterJobList] = useState([]);
  return (
    <div className="w-100 m-auto p-2">
      <CardContainer jobList={filterJobList} />
    </div>
  );
};

export default JobListing;
