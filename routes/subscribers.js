const express = require("express");
// Get the router from express
const router = express.Router();
// Import the Subscriber model
const Subscriber = require("../models/subscriber");
const subscriber = require("../models/subscriber");

// Getting all
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    // Send subscribers to the user
    res.json(subscribers);
  } catch (err) {
    // 500 = error on this server
    res.status(500).json({ message: err.message });
  }
});
// Getting one
router.get("/:id", getSubscriber, (req, res) => {
  res.send(res.subscriber);
});
// Creating one
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Updating one
// Only update the info that gets past using patch. Put will update all the info of the subscriber
router.patch("/", getSubscriber, (req, res) => {});
// Deleting one
router.delete("/", getSubscriber, (req, res) => {
  res.subscriber;
});

// Creating middleware
async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber === null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.subscriber = subscriber;
  next();
}

// Quick fix to remove the errors in the terminal
module.exports = router;
