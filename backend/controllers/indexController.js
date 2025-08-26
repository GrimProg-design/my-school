const express = require('express');
const router = express.Router();
const User = require('../models/user')

exports.home = (req, res) => {
    res.send("welcome to the backend!");
}

exports.get = (req, res) => {
    res.send("backend");
}

exports.post = (req, res) => {
    const num = Number(req.body.num);
    const data = num * 2;
    res.send(String(data));
};

exports.users = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.findOne({ name });

    if (user) {
      res.json([user]);
    } else {
      res.json([{ name: "Пользователь не найден" }]);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json([{ name: "Ошибка сервера" }]);
  }
};
