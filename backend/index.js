const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./api/db/connect");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
