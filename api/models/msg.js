"use strict";

const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Messages", msgSchema);
