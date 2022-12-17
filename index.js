//const { update } = require("jsdom/lib/jsdom/living/html-collection");

// Write your solution in this file!
const employee = {
  name: "Finn",
  streetAddress: "NewYork",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  console.log(employee);
  console.log(key);
  console.log(value);
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key, value) {
  const deletedEmployee = { ...employee };
  delete deletedEmployee.name;
  return deletedEmployee;
  console.log(deletedEmployee);
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
  delete employee.name;
  return employee;
  console.log(employee);
}

// const updateEmployee = updateEmployeeWithKeyAndValue(
//   employee,
//   "streetAddress",
//   "Montreal"
// );
// const updateEmployee2 = updateEmployeeWithKeyAndValue(
//   updateEmployee,
//   "name",
//   "Joe"
// );
// console.log(updateEmployee);
// console.log(updateEmployee2);
