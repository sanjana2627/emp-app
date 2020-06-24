const mockingoose = require('mockingoose').default;
const employeesService = require('../services/employees');
require("../models/db");

mockingoose(employeeModel).toReturn([
  { _id: "1", firstName: "F1", lastName: "L1", dob: "2020-05-01", gender: "male", role: "engineer", location: "L1", address: "A1", contactNumber: "9988776655", basicAllowance: 1200, fixedAllowance: 850, active: true },
  { _id: "2", firstName: "F2", lastName: "L2", dob: "2015-11-12", gender: "female", role: "manager", location: "L2", address: "A2", contactNumber: "5566778899", basicAllowance: 2200, fixedAllowance: 1850, active: true }
]);


test('getEmployees(): it should return correct number of records', async () => {
  var result = await employeesService.getEmployee();
  expect(result.length).toBe(2);
  expect(result[0].basicAllowance).toBe(1200);
  expect(result[0].fixedAllowance).toBe(850);
  expect(result[0].dearnessAllowance).toBe(144);
  expect(result[0].travelAllowance).toBe(96);
  expect(result[0].tax).toBe(687);
  expect(result[0].total).toBe(1603);
});

test('addEmployee(): it should return failure', async () => {
  var result = await employeesService.addEmployee({});
  expect(result.status).toBe(400);
});

test('addEmployee(): it should return success', async () => {
  var obj = { firstName: "F1", lastName: "L1", dob: "2020-05-01", gender: "male", role: "engineer", location: "L1", address: "A1", contactNumber: "9988776655", basicAllowance: 1200, fixedAllowance: 850 }
  var result = await employeesService.addEmployee(obj);
  expect(result.status).toBe(200);
});

test('editEmployee(): it should return failure', async () => {
  var result = await employeesService.editEmployee();
  expect(result.status).toBe(400);
});

test('editEmployee(): it should return failure', async () => {
  var result = await employeesService.editEmployee("1", {});
  expect(result.status).toBe(400);
});

test('editEmployee(): it should return success', async () => {
  var obj = { firstName: "F1", lastName: "L1", dob: "2020-05-01", gender: "male", role: "engineer", location: "L1", address: "A1", contactNumber: "9988776655", basicAllowance: 1200, fixedAllowance: 850 }
  var result = await employeesService.editEmployee("1", obj);
  expect(result.status).toBe(200);
});

test('deleteEmployee(): it should return failure', async () => {
  var result = await employeesService.deleteEmployee();
  expect(result.status).toBe(400);
});

test('deleteEmployee(): it should return success', async () => {
  var result = await employeesService.deleteEmployee("1");
  expect(result.status).toBe(200);
});