export const filterOptions = [
  {
    label: "Job Role",
    value: "jobRole",
    options: [
      "Frontend",
      "Backend",
      "Fullstack",
      "React Native",
      "Android",
      "IOS",
      "Developer",
      "Flutter",
      "Tech Lead",
      "Dev-Ops",
      "Data Engineer",
    ],
    multiple: true,
  },
  {
    label: "No. of employees",
    value: "employeeSize",
    options: ["1-10", "11-20", "21-50", "51-100", "101-200", "201-500", "500+"],
    multiple: true,
  },
  {
    label: "Min base pay",
    value: "minJdSalary",
    options: ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"],
    multiple: false,
  },
  {
    label: "Min Experience",
    value: "minExp",
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiple: false,
  },
];
