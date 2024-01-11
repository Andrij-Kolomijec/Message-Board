const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
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
    added: new Date(),
  });
  console.log(req.body.message);
  res.redirect("/", { title: "Mini Message Board", messages });
});

module.exports = router;
