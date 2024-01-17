const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    text: { type: String, required: true, maxLength: 1000 },
    user: { type: String, required: true, maxLength: 100 },
    added: { type: Date },
  },
  { versionKey: false }
);

MessageSchema.virtual("added_formatted").get(function () {
  return DateTime.fromJSDate(this.added).toLocaleString({
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    hour12: false,
    // timeZoneName: "short",
  });
});

module.exports = mongoose.model("Message", MessageSchema, "Message-Board");
