const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Casa AltApp' });
});

/* Muestra pagina de habitaciones*/
router.get('/habitaciones', function(req, res, next) {
  res.render('index', { title: 'Casa AltApp' });
});

module.exports = router;