const mongoose = require('mongoose');
const uri = "mongodb+srv://root:root@cluster0-cegua.mongodb.net/employees?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(data => {
        console.log("Connected to DB successfully");
    })
    .catch(ex => {
        console.log("Exception in connecting to DB: " + ex.toString());
    })

const employeesSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        dob: String,
        gender: String,
        role: String,
        location: String,
        address: String,
        contactNumber: String,
        basicAllowance: Number,
        fixedAllowance: Number,
        created_at: Date,
        updated_at: Date,
        active: Boolean,
        created_by: String,
        updated_by: String
    },
    {
        collection: "employees_list"
    });

global.employeeModel = mongoose.model("employees_list", employeesSchema);
