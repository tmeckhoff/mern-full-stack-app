const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
    {
        id: Number,
        firstName: String,
        lastName: String,
        jobTitle: String,
        email: String,
        phoneNumber: String
    },
    { timestamps: true }
);

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;