import React from "react";
import JobCard from "../Card/JobCard";
import "./cardContainer.css";
import Loader from "../Loader";

const CardContainer = ({ jobList, loading, loaderRef }) => {
  return (
    <div>
      <div className="w-100 d-flex flex-wrap justify-content-start card-container">
        {jobList.map((job) => {
          return (
            <JobCard
              key={job.jdUid}
              jobLink={job.jdLink}
              jobDesc={job.jobDetailsFromCompany}
              jobId={job.jdUid}
              maxSalary={job.maxJdSalary}
              minSalary={job.minJdSalary}
              currencyCode={job.salaryCurrencyCode}
              location={job.location}
              minExp={job.minExp}
              maxExp={job.maxExp}
              jobRole={job.jobRole}
              companyName={job.companyName}
              logoUrl={job.logoUrl}
              postDate={"Posted 10 days ago"}
            />
          );
        })}
      </div>
      <div ref={loaderRef} className="d-flex justify-content-center loader p-1">
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default CardContainer;
