const express = require('express');
const connectDB = require('./models/db')
const app = express();
const cors = require('cors');
app.listen(3001);

app.use(express.urlencoded())
app.use(express.json())
app.use(cors());

connectDB();
app.get('/', (req, res) => {
  res.send('hitting the root server');
});

const employees = require('./routes/employees')
app.use('/employees', employees);