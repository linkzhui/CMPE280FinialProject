var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userDB');


router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signup',function(req, res, next)
{
  res.render('signup');
});

router.get('/logout',function(req, res, next)
{
    req.session.user="";
    res.render('clothes', { title: 'Clothes', login:'no'});
});

/* GET users list. */
router.get('/userlist', userCtrl.get_userList);

/* Login the user account*/
router.post('/login',userCtrl.login)


/* Add new user into user DB */
router.post('/adduser',userCtrl.register);

/* return user update web page*/
router.get('/:user_name',userCtrl.update_page);

/* Update the users list*/
router.post('/updateuser',userCtrl.update_user);


/* delete the users list*/
router.post('/deleteuser',userCtrl.delete_user);



module.exports = router;
