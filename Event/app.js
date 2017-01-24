var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var saveToDb = require('./routes/DbOperations');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.header("Content-Type",'application/json');
    res.header("access-control-allow-headers", 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("access-control-allow-methods", 'GET, POST, PUT');
    res.header("access-control-allow-origin", '*');
    res.header("server", 'cloudflare-nginx');
  next();
});

app.use('/db', saveToDb);

module.exports = app;
