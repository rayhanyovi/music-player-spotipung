const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artists: { type: [String], required: true },
  url: { type: String, required: true },
  albumCover: { type: String, required: true },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
