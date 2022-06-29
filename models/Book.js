const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
  },
  bookmark: {
    type: Number,
    required: false,
  },
  ownerId: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  }
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;
