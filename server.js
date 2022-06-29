const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/books",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connected to mongodb");
  }
);

const apiRoutes = require("./routes/apiRoutes");

app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
