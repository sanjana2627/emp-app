define({ "api": [
  {
    "type": "post",
    "url": "/api/employees",
    "title": "Add Employee",
    "name": "AddEmployee",
    "group": "Employees",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactNumber",
            "description": "<p>Contact Number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "basicAllowance",
            "description": "<p>Basic Allowance of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fixedAllowance",
            "description": "<p>Fixed Allowance of the employee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<ol start=\"200\"> <li></li> </ol>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/employees.js",
    "groupTitle": "Employees"
  },
  {
    "type": "delete",
    "url": "/api/employees/:id",
    "title": "Delete Employee",
    "name": "DeleteEmployee",
    "group": "Employees",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<ol start=\"200\"> <li></li> </ol>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/employees.js",
    "groupTitle": "Employees"
  },
  {
    "type": "get",
    "url": "/api/employees",
    "title": "List Employees",
    "name": "GetEmployees",
    "group": "Employees",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contactNumber",
            "description": "<p>Contact Number of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "basicAllowance",
            "description": "<p>Basic Allowance of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fixedAllowance",
            "description": "<p>Fixed Allowance of the employee.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/employees.js",
    "groupTitle": "Employees"
  },
  {
    "type": "put",
    "url": "/api/employees/:id",
    "title": "Modify Employee",
    "name": "ModifyEmployee",
    "group": "Employees",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactNumber",
            "description": "<p>Contact Number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "basicAllowance",
            "description": "<p>Basic Allowance of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fixedAllowance",
            "description": "<p>Fixed Allowance of the employee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<ol start=\"200\"> <li></li> </ol>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/employees.js",
    "groupTitle": "Employees"
  }
] });
