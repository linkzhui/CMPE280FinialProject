var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var json = require('json');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var body_parser = require('body-parser');
var app = express();
var expressEjsExtend = require("express-ejs-extend");
var session = require('express-session');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('express-ejs-extend')); // add this line
app.set('view engine', 'ejs');
app.use(session({
    path: '/', secure: false, maxAge: null,secret:'keyboard cat',saveUninitialized:true,resave:true}));
app.use(logger('dev'));
// app.use(express.json());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//MongoDB setup

var db = require('monk')('localhost:27017/280FinalProject');

//Make the database accessible to the router.
app.use(function(req, res, next)
{
    req.db = db;
    next();
});

app.use('/', indexRouter);
app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
