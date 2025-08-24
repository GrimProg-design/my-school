const express = require('express');
const router = express.Router();

exports.home = (req, res) => {
    res.send("welcome to the backend!");
}

exports.get = (req, res) => {
    res.send("backend");
}