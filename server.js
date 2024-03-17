// Pull in the express library
const express = require("express");
// Create an app variable to use when configuring the server
const app = express();

// Start the server on port 3000
app.listen(3000, () => console.log("Server Started"));

// NEXT -> Start the server using nodemon by typeing npm run devStart in the terminal
