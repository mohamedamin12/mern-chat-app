const mongoose = require("mongoose");


const connectToDB = ()=> {
  mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error.message);
  });
}

module.exports = connectToDB;