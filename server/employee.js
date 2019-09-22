const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
    {
        id: Number,
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        jobTitle: String,
        email: {type: String, required: true},
        phoneNumber: String
    },
    { timestamps: true }
);

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;