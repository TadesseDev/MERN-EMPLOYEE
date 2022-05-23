const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  salary: {
    type: Number
  },
  salary: {
    type: String,
  },
});

module.exports = mongoose.model('employeeSchema', employeeSchema);