const { Bike } = require("../models");
const { updateOne } = require("../models/Book");
const Book = require("../models/Book");

module.exports = {
  getAll: async (req, res) => {
    try {
      const allBooks = await Bike.find({});
      res.json(allBooks);
    } catch (err) {
      res.send(err);
    }
  },
  getOneById: async (req, res) => {
    try {
      const oneBook = await Book.find({ _id: req.params.id });
      res.json(oneBook);
    } catch (err) {
      res.send(err);
    }
  },
  getOne: async (req, res) => {
    try {
      const oneBook = await Book.find({ title: req.params.id });
      res.json(oneBook);
    } catch (err) {
      res.send(err);
    }
  },
  updateOne: async (req, res) => {
    try {
      const updateBook = await Book.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.json(updateBook);
    } catch (err) {
      res.send(err);
    }
  },
  postOne: async (req, res) => {
    try {
      const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        pageCount: req.body.pageCount,
        ISBN: req.body.isbn,
        ownerId: req.body.ownerId,
      });
      const successSave = await newBook.save();
      res.json(successSave);
    } catch (err) {
      res.send(err);
    }
  },
  deleteOne: async (req, res) => {
    try {
      res.json(await Book.findByIdAndDelete(req.params.id));
    } catch (err) {
      res.send(err);
    }
  },
};
