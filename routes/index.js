const express = require("express");
const router = express.Router();
const { DateTime } = require("luxon");
const Message = require("../models/message");
const message_controller = require("../controllers/messageController");

router.get("/", message_controller.messages);

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", async (req, res, next) => {
  const newMessage = new Message({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  await newMessage.save();
  res.redirect("/");
});

module.exports = router;
