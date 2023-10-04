const mongoose = require("mongoose");

// Define the Book Schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
    unique: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  genre: String,
  copiesAvailable: {
    type: Number,
    default: 1,
  },
});

// Create and export the Book model
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
