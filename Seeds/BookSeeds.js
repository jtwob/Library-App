let mongoose = require("mongoose");
let Book = require("../models/Book");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let bookSeed = [
  {
    title: "Test",
    author: "James",
    pageCount: 12,
    ISBN: "03d033ddP",
    ownerId: "James",
  },
  {
    title: "Book 2",
    author: "James",
    pageCount: 200,
    ISBN: "03d033ddP",
    ownerId: "James",
  },
  {
    title: "Book 3",
    author: "James",
    pageCount: 388,
    ISBN: "03d033ddP",
    ownerId: "James",
  },
];

const seedDB = async () => {
  await Book.deleteMany({});
  await Book.insertMany(bookSeed);
};

seedDB().then(() => {
  mongoose.connection.close();
});
