const {home, inicio, about, categorias, contactanos, novedades, pregfrec}= require('../controllers/indexController');
const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', home);

router.get('/inicio', inicio);

router.get('/about', about);

router.get('/categorias', categorias);

router.get('/contactanos', contactanos);

router.get('/novedades', novedades);

router.get('/pregfrec', pregfrec);


module.exports = router;
