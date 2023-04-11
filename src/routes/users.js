const {login, register}= require('../controllers/usersController');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/login', login);
router.get('/register', register);

module.exports = router;
