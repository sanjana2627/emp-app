var express = require('express');
var router = express.Router();
var employeeService = require("../services/employees");

/**
 * @api {get} /api/employees List Employees
 * @apiName GetEmployees
 * @apiGroup Employees
 *
 * @apiSuccess {String} firstName First Name of the employee.
 * @apiSuccess {String} lastName Last Name of the employee.
 * @apiSuccess {String} dob DOB of the employee.
 * @apiSuccess {String} role Role of the employee.
 * @apiSuccess {String} location Location of the employee.
 * @apiSuccess {String} address Address of the employee.
 * @apiSuccess {String} contactNumber Contact Number of the employee.
 * @apiSuccess {Number} basicAllowance Basic Allowance of the employee.
 * @apiSuccess {Number} fixedAllowance Fixed Allowance of the employee.
 * @apiSuccess {Number} fixedAllowance Basic Allowance of the employee.
 */

router.get('/', async (req, res) => {
    var employees = await employeeService.getEmployee();
    res.json(employees);
});

/**
 * @api {post} /api/employees Add Employee
 * @apiName AddEmployee
 * @apiGroup Employees
 *
 * @apiParam {String} firstName First Name of the employee.
 * @apiParam {String} lastName Last Name of the employee.
 * @apiParam {String} dob DOB of the employee.
 * @apiParam {String} role Role of the employee.
 * @apiParam {String} location Location of the employee.
 * @apiParam {String} address Address of the employee.
 * @apiParam {String} contactNumber Contact Number of the employee.
 * @apiParam {Number} basicAllowance Basic Allowance of the employee.
 * @apiParam {Number} fixedAllowance Fixed Allowance of the employee.
 * @apiParam {Number} fixedAllowance Basic Allowance of the employee.
 * 
 * @apiSuccess {Number} status 200.
 * @apiSuccess {String} message success.
 */

router.post('/', async (req, res) => {
    var employees = await employeeService.addEmployee(req.combinedParams);
    res.json(employees);
});

/**
 * @api {put} /api/employees/:id Modify Employee
 * @apiName ModifyEmployee
 * @apiGroup Employees
 *
 * @apiParam {String} firstName First Name of the employee.
 * @apiParam {String} lastName Last Name of the employee.
 * @apiParam {String} dob DOB of the employee.
 * @apiParam {String} role Role of the employee.
 * @apiParam {String} location Location of the employee.
 * @apiParam {String} address Address of the employee.
 * @apiParam {String} contactNumber Contact Number of the employee.
 * @apiParam {Number} basicAllowance Basic Allowance of the employee.
 * @apiParam {Number} fixedAllowance Fixed Allowance of the employee.
 * @apiParam {Number} fixedAllowance Basic Allowance of the employee.
 * 
 * @apiSuccess {Number} status 200.
 * @apiSuccess {String} message success.
 */

router.put('/:id', async (req, res) => {
    var employees = await employeeService.editEmployee(req.params.id, req.combinedParams);
    res.json(employees);
});

/**
 * @api {delete} /api/employees/:id Delete Employee
 * @apiName DeleteEmployee
 * @apiGroup Employees
 * 
 * @apiSuccess {Number} status 200.
 * @apiSuccess {String} message success.
 */

router.delete('/:id', async (req, res) => {
    var employees = await employeeService.deleteEmployee(req.params.id);
    res.json(employees);
});

module.exports = router;