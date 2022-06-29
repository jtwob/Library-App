let mongoose = require("mongoose");
let Book = require("../models/Book")


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let bookSeed = [

  {
    title: "Test",
    author: "James",
    pages: 12,
    ISBN: "03480KKSDP",
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

// db.Book.deleteMany({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log("Added book records!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
