import {
  SET_FILTERS,
  SET_JOBLIST_DATA,
  SET_LOADING,
} from "./jobApplication.action";

const initialState = {
  filters: {},
  jobListData: {
    jobList: [],
    limit: 12,
    offset: 0,
  },
  loading: false,
};

const jobApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_JOBLIST_DATA:
      return {
        ...state,
        jobListData: action.payload,
        loading: false,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return { ...state };
  }
};
export default jobApplicationReducer;
