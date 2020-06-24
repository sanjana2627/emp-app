
const daPercent = 0.12;
const travelPercent = 0.08;
const taxPercent = 0.3;

async function getEmployee() {
    var employees = await employeeModel.find({ active: true });
    var empArr = employees.map(obj => {
        var tempObj = JSON.parse(JSON.stringify(obj));
        tempObj.basicAllowance = obj.basicAllowance || 0;
        tempObj.fixedAllowance = obj.fixedAllowance || 0;
        tempObj.dearnessAllowance = daPercent * tempObj.basicAllowance;
        tempObj.travelAllowance = travelPercent * tempObj.basicAllowance;

        var totalBeforetax = tempObj.basicAllowance + tempObj.fixedAllowance + tempObj.dearnessAllowance + tempObj.travelAllowance;
        tempObj.tax = taxPercent * totalBeforetax;
        tempObj.total = totalBeforetax - tempObj.tax;

        return tempObj;
    });
    return empArr;
}

function validateParams(obj) {
    var errors = [];
    if (!obj.firstName || !obj.firstName.trim()) {
        errors.push("First Name missing");
    }
    if (!obj.lastName || !obj.lastName.trim()) {
        errors.push("Last Name missing");
    }
    if (!obj.gender || !obj.gender.trim()) {
        errors.push("Gender missing");
    }
    if (!obj.role || !obj.role.trim()) {
        errors.push("Role missing");
    }
    if (!obj.contactNumber || isNaN(obj.contactNumber)) {
        errors.push("Contact Number missing");
    }
    if (!obj.basicAllowance || isNaN(obj.basicAllowance)) {
        errors.push("Basic Allowance missing");
    }
    if (!obj.fixedAllowance || isNaN(obj.fixedAllowance)) {
        errors.push("Fixed Allowance missing");
    }
    if (errors.length) {
        return { status: 400, message: "incorrect params", errors };
    }
}

async function addEmployee(obj) {
    var notValid = validateParams(obj);
    if (notValid) {
        return notValid;
    }
    obj.created_at = new Date();
    obj.active = true;
    obj.created_by = "Admin";
    var employeeObj = new employeeModel(obj);
    await employeeObj.save();
    return { status: 200, message: "success" };
}

async function editEmployee(id, obj) {
    if (!id || !id.trim()) {
        return { status: 400, message: "incorrect params", errors: ["id missing"] };
    }
    var notValid = validateParams(obj);
    if (notValid) {
        return notValid;
    }
    obj.updated_at = new Date();
    obj.updated_by = "Admin";
    await employeeModel.findByIdAndUpdate(id, obj);
    return { status: 200, message: "success" };
}

async function deleteEmployee(id) {
    if (!id || !id.trim()) {
        return { status: 400, message: "id missing" };
    }
    var obj = {};
    obj.updated_at = new Date();
    obj.updated_by = "Admin";
    obj.active = false;
    await employeeModel.findByIdAndUpdate(id, obj);
    return { status: 200, message: "success" };
}


module.exports = {
    getEmployee,
    addEmployee,
    editEmployee,
    deleteEmployee
};