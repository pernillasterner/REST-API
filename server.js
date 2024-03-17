// Load and configure environment variables from .env file
require("dotenv").config();

// Require the express library
const express = require("express");
// Create an app variable to use when configuring the server
const app = express();
// Require the mongoose library
const mongoose = require("mongoose");

// Connect to the database
mongoose.connect("mongodb://localhost/subscribers");

// Hook up some events to the database to check if it's working correctly
const db = mongoose.connection;
// Log error
db.on("error", (error) => console.error(error));
// Once it's connected
db.once("open", () => console.log("Connected to database"));

// Set up server to accept .json as a body
app.use(express.json());

// Setting up routes
const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter); // localhost:3000/subscribers

// Start the server on port 3000
app.listen(3000, () => console.log("Server Started"));

// NEXT -> Start the server using nodemon by typeing npm run devStart in the terminal

// Configure mongoose to connect to the MongoDB database
