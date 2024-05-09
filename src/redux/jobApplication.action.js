export const SET_FILTERS = "SET_FILTERS";
export const SET_JOBLIST_DATA = "SET_JOBLIST_DATA";
export const SET_LOADING = "SET_LOADING";

export const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    payload: filters,
  };
};

export const setJobListData = (jobList) => {
  return {
    type: SET_JOBLIST_DATA,
    payload: jobList,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
