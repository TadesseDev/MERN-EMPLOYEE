const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const conn = await
      mongoose.connect(`mongodb+srv://tadesse:123@cluster0.51fwj.mongodb.net/?retryWrites=true&w=majority`, {})
    console.log(`connection successfull ${conn}`);
  } catch (error) {
    console.log(`fail`);
  }
}
module.exports = connectDB;
