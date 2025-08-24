const express = require('express');
const router = express.Router();

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