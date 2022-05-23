const express = require('express');
const route = express.Router();
const employeeSchema = require('../models/employees')


route.get('/list', async (req, res) => {
  try {
    const employees = await employeeSchema.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.put('/update', (req, res) => {
  res.send('creating new employee');
});

route.post('/create', (req, res) => {
  console.log("body is", req.body)
  const employee = new employeeSchema({
    ...req.body
  });
  try {
    const newEmployee = employee.save();
    console.log('saved');
    res.status(201).json(newEmployee);
  } catch (error) {
    console.log("fail to save", error);
    res.status(400).json({ message: error.message });
  }
});

route.delete('/delete', async (req, res) => {
  const { empId } = req.body;
  console.log(empId);
  try {
    const employee = employeeSchema.findById(empId);
    if (!employee)
      throw Error('cannot find user');
    await employee.remove();
    // console.log(employee);
    res.status(201).json({ message: "deleted successfully" });
  } catch (error) {
    console.log('error deleting')
    res.send('deleting employee fail');
  }
});

module.exports = route;