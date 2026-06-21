const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// CREATE MESSAGE
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json({ success: true, message: "Message saved" });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET ALL MESSAGES
router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

module.exports = router;