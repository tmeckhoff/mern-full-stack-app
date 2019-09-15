const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
    {
        id: Number,
        firstName: String,
        lastName: String,
        jobTitle: String,
        photo: String,
        email: String,
        phoneNumber: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);