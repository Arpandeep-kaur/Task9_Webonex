exports.Search = (employeeArray) => {
    return employeeArray.filter((e) => e.name.includes("am"));
  };