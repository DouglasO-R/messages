"use strict";

const messages = require("../controllers/msg");
const routes = require("express").Router();

routes.route("/messages").get(messages.listAll).post(messages.create);
routes
  .route("/messages/:msgId")
  .get(messages.findOne)
  .put(messages.update)
  .delete(messages.delete);

module.exports = routes;
