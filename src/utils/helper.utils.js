export const validSalary = (minSalary, maxSalary) => {
  if (minSalary && maxSalary) return `${minSalary} - ${maxSalary}`;
  else if (minSalary) return minSalary;
  else return "";
};

export const currencyIcon = (currencyCode) => {
  switch (currencyCode) {
    case "INR":
      return "₹";
    case "USD":
      return "$";
    case "EUR":
      return "€";
    default:
      return;
  }
};

const filterOutItems = (filters, item) => {
  for (let key in filters) {
    switch (key) {
      case "minJdSalary": {
        if (filters[key]) {
          const sal = Number(filters[key].slice(0, -1));
          if (!item.minJdSalary || item.minJdSalary < sal) return false;
        }
        break;
      }
      case "minExp": {
        if (filters[key] && (!item.minExp || item.minExp > filters[key]))
          return false;
        break;
      }
      case "employeeSize": {
        if (filters[key].length > 0) return false;
        break;
      }
      case "location":
      case "companyName": {
        if (!item[key].toLowerCase().includes(filters[key].toLowerCase()))
          return false;
        break;
      }
      case "jobRole": {
        if (
          filters[key].length > 0 &&
          !filters[key].some((ele) => ele.toLowerCase() === item[key])
        )
          return false;
        break;
      }
      default:
        break;
    }
  }
  return true;
};

export const handleOnFilter = (filters, updateJobList) => {
  const newList = updateJobList.filter((item) => {
    return filterOutItems(filters, item);
  });
  return newList;
};
