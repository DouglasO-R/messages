"use strict";

const mongoose = require("mongoose");
const Messages = require("../models/msg");

class MessageControllers {
  static async listAll(req, res) {
    try {
      let messages = await Messages.find({});
      return res.status(200).json(messages);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async create(req, res) {
    let body = req.body;

    try {
      let message = await Messages.create(body);

      return res.status(200).json(message);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async findOne(req, res) {
    let id = req.params.msgId;
    try {
      let message = await Messages.findById(id).exec();
      return res.status(200).json(message);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async update(req, res) {
    let id = req.params.msgId;
    let body = req.body;

    try {
      let message = await Messages.findOneAndUpdate({ _id: id }, body, {
        new: true,
      });
      return res.status(200).json(message);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async delete(req, res) {
    let id = req.params.msgId;
    try {
      await Messages.remove({ _id: id });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = MessageControllers;
