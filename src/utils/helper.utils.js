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
