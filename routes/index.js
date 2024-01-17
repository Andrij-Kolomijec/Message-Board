const express = require("express");
const router = express.Router();
const { DateTime } = require("luxon");

const messages = [
  {
    text: "Hello there.",
    user: "Obi-Wan Kenobi",
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED),
  },
  {
    text: "General Kenobi!",
    user: "Grievous",
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Add a message" });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED),
  });
  console.log(req.body.message);
  res.redirect("/");
});

module.exports = router;
