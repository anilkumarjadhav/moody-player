const mongoose = require("mongoose");
const { mongoUri } = require("../../config");
function connectDB() {
  mongoose
    .connect(mongoUri)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log("Error connecting to MongoDB"));
}
module.exports = connectDB;
