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

route.put('/update', getEmployeeMiddleWare, async (req, res) => {
  delete req.body.empId;
  req.employee.firstName = req.body.firstName;
  req.employee.birthDate = req.body.birthDate;
  req.employee.salary = req.body.salary;
  req.employee.sex = req.body.sex;
  try {
    const updateEmployee = await req.employee.save();
    res.status(201).json({ message: "Successfully updated", ...updateEmployee });
  } catch (error) {
    res.status(500).json({ message: "fail to update user data", ...error });
  }
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