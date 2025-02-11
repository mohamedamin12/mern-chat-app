const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
const connectToDB = require("./db/connectToDB.js");
const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");
const messageRoutes = require("./routes/message.route.js");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5555;

//* Middleware to parse JSON request bodies
app.use(express.json());

//* Middleware to parse cookies
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT, () => {
  connectToDB()
  console.log(`Server is running on port ${PORT}`);
});
