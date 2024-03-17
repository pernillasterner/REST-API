// Load and configure environment variables from .env file
require("dotenv").config();

// Require the express library
const express = require("express");
// Create an app variable to use when configuring the server
const app = express();
// Require the mongoose library
const mongoose = require("mongoose");

// Connect to database and add the database connection
mongoose.connect(process.env.DATABASE_URL);

// Hook up some events to the database to check if it´s working correctly
const db = mongoose.connection;
// Log error
db.on("error", (error) => console.error(error));
// Once it´s connected
db.once("open", () => console.log("Connected to database"));

// Start the server on port 3000
app.listen(3000, () => console.log("Server Started"));

// NEXT -> Start the server using nodemon by typeing npm run devStart in the terminal

// Configure mongoose to connect to the MongoDB database
