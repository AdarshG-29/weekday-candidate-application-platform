import jobApplicationReducer from "./jobApplication.reducer";
import { combineReducers } from "@reduxjs/toolkit";
const reducer = combineReducers({
  jobApplication: jobApplicationReducer,
});
export default reducer;
