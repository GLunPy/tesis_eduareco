const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hostel App' });
});

/* Muestra pagina de habitaciones*/
router.get('/habitaciones', function(req, res, next) {
  res.render('index', { title: 'Hostel App' });
});

module.exports = router;