let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/userDB');
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

router.get('/detail/:type/:product_id', userCtrl.detail);

/* delete the users list*/
router.get('/shopping',function(req, res,next)
{
    if(req.session.user)
    {
        res.render('shoppingcart', { title: 'shoppingCart', login:req.session.user});
    }
    else{
        res.render('shoppingcart', { title: 'shoppingCart', login:'no'});
    }
});

module.exports = router;
