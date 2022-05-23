const express = require('express');
const route = express.Router();


route.get('/list', (req, res) => {
  res.send('getting employees');
});

route.put('/update', (req, res) => {
  res.send('creating new employee');
});

route.post('/create', (req, res) => {
  res.send('creating new employee');
});

route.delete('/delete', (req, res) => {
  res.send('deleting employee employee');
});

module.exports = route;