const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./api/routes/msg");
require("dotenv").config();

const app = express();

const port = process.env.PORT;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const db = process.env.DB;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@test.bw9kw.mongodb.net/${db}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json(), routes);

app.listen(port, () => console.log("servidor na porta: " + port));
