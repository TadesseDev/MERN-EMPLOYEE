require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = async () => {
  // console.log("connecting to", process.env.MANGO_URI_LOCAL);
  try {
    await
      mongoose.connect(process.env.MANGO_URI_LOCAL, {})
  } catch (error) {
    console.log(`fail`);
  }
}

module.exports = connectDB;
