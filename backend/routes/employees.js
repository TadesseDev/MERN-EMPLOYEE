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

route.delete('/delete', (req, res) => {
  res.send('deleting employee employee');
});

module.exports = route;