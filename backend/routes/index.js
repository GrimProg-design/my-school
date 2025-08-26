const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const validateName = require("../middlewares/validateName");

router.get('/', indexController.home);

router.get('/get', indexController.get);

router.post('/post', indexController.post)

router.post("/users", indexController.users);

router.post("/add", validateName, indexController.add)

module.exports = router;