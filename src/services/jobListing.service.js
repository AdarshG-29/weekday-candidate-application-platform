import { getSampleJdJSON } from "../constants/JDSampleData";

export const fetchJobLists = (offset, limit) => {
  const sampleData = getSampleJdJSON();
  //here we will write an api fetch logic with limit and offset information inside body of headers.
  //but now as we are saving our data locally, we will display some of the data with by setting offset and limit.
  //offset works as an index of slice function and limit works as size of sliced array.
  return offset < sampleData.length - 1
    ? sampleData.slice(offset, offset + limit)
    : [];
};
