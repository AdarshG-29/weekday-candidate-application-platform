import React, { useState, useEffect, useRef } from "react";
import CardContainer from "../CardContainer/CardContainer";
import { fetchJobLists } from "../../services/jobListing.service";
import { useDispatch, useSelector } from "react-redux";
import { setJobListData, setLoading } from "../../redux/jobApplication.action";
import { handleOnFilter } from "../../utils/helper.utils";
import RenderEmptyText from "../RenderEmptyText/RenderEmptyText";

const JobListing = () => {
  const dispatch = useDispatch();
  const { filters, loading, jobListData } = useSelector(
    (store) => store.jobApplication
  );
  const loaderRef = useRef(null);
  const [filteredJobList, setFilteredJobList] = useState(jobListData.jobList);

  const handleOnFetchList = () => {
    //dispatch the action to set the loading true
    dispatch(setLoading());
    const newJobList = fetchJobLists(jobListData.offset, jobListData.limit);
    const updateList = [...jobListData.jobList, ...newJobList];
    //now make an new object to store the new jobList and new offset in the redux
    const newJobListData = {
      ...jobListData,
      jobList: updateList,
      offset:
        newJobList.length !== 0
          ? jobListData.offset + jobListData.limit
          : jobListData.offset,
      loading: false,
    };
    //dispatch the action to set the new data
    dispatch(setJobListData(newJobListData));
  };

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

  //filter out the items as per the filter selection and set the new filteredList
  useEffect(() => {
    const newFilteredList = handleOnFilter(filters, jobListData.jobList);
    setFilteredJobList(newFilteredList);
  }, [filters, jobListData.jobList]);

  return (
    <div className="w-100 m-auto p-2">
      {filteredJobList.length > 0 ? (
        <CardContainer
          jobList={filteredJobList}
          loading={loading}
          loaderRef={loaderRef}
        />
      ) : (
        <RenderEmptyText />
      )}
    </div>
  );
};

export default JobListing;
