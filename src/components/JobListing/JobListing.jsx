import React, { useState, useEffect, useRef, useCallback } from "react";
import CardContainer from "../CardContainer/CardContainer";
import { fetchJobLists } from "../../services/jobListing.service";
import { useDispatch, useSelector } from "react-redux";
import { setJobListData, setLoading } from "../../redux/jobApplication.action";

const JobListing = () => {
  const dispatch = useDispatch();
  const { loading, jobListData } = useSelector((store) => store.jobApplication);
  const loaderRef = useRef(null);

  const handleOnFetchList = useCallback(() => {
    dispatch(setLoading());
    const newJobList = fetchJobLists(jobListData.offset, jobListData.limit);
    const updateList = [...jobListData.jobList, ...newJobList];
    const newJobListData = {
      ...jobListData,
      jobList: updateList,
      offset: jobListData.offset + jobListData.limit,
      loading: false,
    };
    dispatch(setJobListData(newJobListData));
  }, [dispatch, jobListData.jobList]);

  useEffect(() => {
    handleOnFetchList();
  }, []);

  //the intersection observer is the modern technique to implement infinite scrolling
  //we dont need to worry about scroll height and all those parameters.
  //we just need to observe a loading component.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        handleOnFetchList();
      }
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [handleOnFetchList]);

  return (
    <div className="w-100 m-auto p-2">
      <CardContainer
        jobList={jobListData.jobList}
        loading={loading}
        loaderRef={loaderRef}
      />
    </div>
  );
};

export default JobListing;
