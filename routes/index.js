var express = require('express');
var router = express.Router();

/* GET Clothes page. */
router.get('/',function(req, res, next){
    console.log("current user: "+req.session.user);
    if(req.session.user)
    {
        res.render('index', { title: 'Home Page', login:req.session.user});
    }
    else{
        res.render('index', { title: 'Home Page', login:'no'});
    }
});

router.get('/clothes', function(req, res, next) {
    console.log("current user: "+req.session.user);
    if(req.session.user)
    {
        res.render('clothes', { title: 'Clothes', login:req.session.user});
    }
    else{
        res.render('clothes', { title: 'Clothes', login:'no'});
    }
});

/* GET Shoes page. */
router.get('/shoes', function(req, res, next) {
    console.log("current user: "+req.session.user);
    if(req.session.user)
    {
        res.render('shoes', { title: 'Shoes', login:req.session.user});
    }
    else{
        res.render('shoes', { title: 'Shoes', login:'no'});
    }
});

/* GET Beauty page. */
router.get('/beauty', function(req, res, next) {
    console.log("current user: "+req.session.user);
    if(req.session.user)
    {
        res.render('beauty', { title: 'Beauty', login:req.session.user});
    }
    else{
        res.render('beauty', { title: 'Beauty', login:'no'});
    }
});

router.get('/detail/:type/:product_id', function(req, res, next) {
    console.log("type: "+req.params.type);
    console.log("product_id: "+req.params.product_id);
    if(req.session.user)
    {
        res.render('detail', { title: 'Detail', login:req.session.user});
    }
    else{
        res.render('detail', { title: 'Detail', login:'no'});
    }
});

module.exports = router;
