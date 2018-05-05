var express = require('express');
var router = express.Router();

/* GET Clothes page. */
router.get('/',function(req, res, next){
    res.render('index', { title: 'Home Page' });
});

router.get('/clothes', function(req, res, next) {
  res.render('clothes', { title: 'Clothes' });
});

/* GET Shoes page. */
router.get('/shoes', function(req, res, next) {
    res.render('shoes', { title: 'Shoes' });
});

/* GET Beauty page. */
router.get('/beauty', function(req, res, next) {
    res.render('beauty', { title: 'Beauty' });
});

router.get('/detail', function(req, res, next) {
    res.render('detail', { title: 'Detail' });
});

module.exports = router;
