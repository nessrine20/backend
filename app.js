var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//imprtation des biblio

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//imprtation de routage
var app = express();
//creation de projet





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//malahou w ma3alayh

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//erreur cote client

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//erreur cote serveur

module.exports = app;
