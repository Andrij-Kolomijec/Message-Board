const Message = require("../models/message");
const asyncHandler = require("express-async-handler");

exports.messages = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find({}, "text user added").exec();
  res.render("index", { title: "Mini Message Board", messages: allMessages });
});
