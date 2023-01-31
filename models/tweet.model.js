const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    message: { type: String, required: true, maxLength: 140 },
    user: { type: String, required: true },
    image: { type: String },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tweet", schema);
