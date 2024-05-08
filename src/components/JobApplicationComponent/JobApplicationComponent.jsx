import React from "react";
import JobFilters from "../JobFilters";
import JobListing from "../JobListing";

const JobApplicationComponent = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-1">
      <JobFilters />
      <JobListing />
    </div>
  );
};

export default JobApplicationComponent;
