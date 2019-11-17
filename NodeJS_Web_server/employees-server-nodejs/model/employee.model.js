var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    eplCode: String,
    fullName: String,
    dateOfBirth: String,
    address:String,
    gender: String,
    phoneNumber: String,
    email: String,
    salary: String,
    image:String,
    position: String

});

var Employee = mongoose.model('Employee',employeeSchema,'employees');

module.exports = Employee;