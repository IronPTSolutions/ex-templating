const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "message is required"],
      maxLength: [140, "max 140 chars."],
    },
    user: { type: String, required: [true, "user is required"] },
    image: { type: String },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tweet", schema);
