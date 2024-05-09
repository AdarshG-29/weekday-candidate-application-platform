import React, { useState, useEffect } from "react";
import CardContainer from "../CardContainer/CardContainer";
import { fetchJobLists } from "../../services/jobListing.service";
import { useDispatch, useSelector } from "react-redux";
import { setJobListData, setLoading } from "../../redux/jobApplication.action";

const JobListing = () => {
  const dispatch = useDispatch();
  const { filters, loading, jobListData } = useSelector(
    (store) => store.jobApplication
  );
  const [filterJobList, setFilterJobList] = useState([]);

  useEffect(() => {
    dispatch(setLoading());
    const newJobList = fetchJobLists(jobListData.offset, jobListData.limit);
    setFilterJobList([...filterJobList, ...newJobList]);
  }, []);

  useEffect(() => {
    const newJobListData = {
      ...jobListData,
      jobList: filterJobList,
      offset: jobListData.offset + jobListData.limit,
      loading: false,
    };
    dispatch(setJobListData(newJobListData));
  }, [filterJobList]);

  return (
    <div className="w-100 m-auto p-2">
      <CardContainer jobList={filterJobList} />
    </div>
  );
};

export default JobListing;
