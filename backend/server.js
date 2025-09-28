require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
const { port } = require("./config");
connectDB();
app.listen(port, () => console.log("server is running on port 3000"));
