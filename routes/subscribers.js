const express = require("express");
// Get the router from express
const router = express.Router();

// Getting all
router.get("/", (req, res) => {});
// Getting one
router.get("/:id", (req, res) => {});
// Creating one
router.post("/", (req, res) => {});
// Updating one
// Only update the info that gets past using patch. Put will update all the info of the subscriber
router.patch("/", (req, res) => {});
// Deleting one
router.delete("/", (req, res) => {});

// Quick fix to remove the errors in the terminal
module.exports = router;
