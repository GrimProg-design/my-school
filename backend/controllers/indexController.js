const express = require("express");
const router = express.Router();
const User = require("../models/user");

exports.home = (req, res) => {
  res.send("welcome to the backend!");
};

exports.get = (req, res) => {
  res.send("backend");
};

exports.post = (req, res) => {
  const num = Number(req.body.num);
  const data = num * 2;
  res.send(String(data));
};

exports.users = async (req, res) => {
  try {
    const { name } = req.body;

    const users = await User.find({ name: new RegExp(`^${name}$`, "i") });

    if (users.length > 0) {
      res.json(users);
    } else {
      res.json([{ name: "Пользователь не найден" }]);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json([{ name: "Ошибка сервера" }]);
  }
};



exports.add = async (req, res) => {
  try {
    const  newUser  = new User({ name: req.body.name });
    await newUser.save();
    res.send(`Пользователь ${newUser.name} успешно добавлен`)
  } catch (err) {
    console.log(err)
  }
};
