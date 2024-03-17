const express = require("express");
// Get the router from express
const router = express.Router();
// Import the Subscriber model
const Subscriber = require("../models/subscriber");

// Getting all
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
  } catch (err) {
    // 500 = error on this server
    res.status(500).json({ message: err.message });
  }
});
// Getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
// Creating one
router.post("/", (req, res) => {});
// Updating one
// Only update the info that gets past using patch. Put will update all the info of the subscriber
router.patch("/", (req, res) => {});
// Deleting one
router.delete("/", (req, res) => {});

// Quick fix to remove the errors in the terminal
module.exports = router;
