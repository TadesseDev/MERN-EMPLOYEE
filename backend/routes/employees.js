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

route.put('/update', getEmployeeMiddleWare, (req, res) => {
  req.employee = { ...req.employee, ...req.body };
  res.send('updating user data new employee');
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

route.delete('/delete', getEmployeeMiddleWare, async (req, res) => {
  try {
    await req.employee.deleteOne();
    res.status(201).json({ message: "deleted successfully" });
  } catch (error) {
    console.log('error deleting')
  }
});

async function getEmployeeMiddleWare(req, res, next) {
  const { empId } = req.body;
  try {
    const employee = await employeeSchema.findById(empId);
    if (!employee)
      throw Error('cannot find user');
    req.employee = employee;
    next();
  } catch (error) {
    res.status(500).send('deleting employee fail');
  }
}

module.exports = route;