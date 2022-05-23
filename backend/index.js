const express = require('express');
const connectDB = require('./models/db')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.listen(3001, () => console.log('server running'));

app.use(express.urlencoded())
app.use(express.json())
app.use(cors());

connectDB();
const db = mongoose.connection
db.on('error', err => console.log(err));
db.once('open', () => console.log('connection success'));
app.get('/', (req, res) => {
  res.send('hitting the root server');
});

const employees = require('./routes/employees')
app.use('/employees', employees);