const {detail,cart}= require ('../controllers/productsController');
const express = require('express');
const router = express.Router();


router.get('/detail', detail)
router.get('/cart', cart)

module.exports = router
