const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// connecting the mongoDB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

// listening the server
app.listen(PORT, () => {
  console.log("server is listening");
});
