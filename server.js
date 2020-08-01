const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://workout:RussianAK47@ds259119.mlab.com:59119/heroku_9lrwwpmn", {
  useUnifiedTopology:true,
  useMongoClient: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});