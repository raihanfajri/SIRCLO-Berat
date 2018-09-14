var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var viewRouter = require('./routes/view.route');
var apiRouter = require('./routes/api.route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', viewRouter);
app.use('/api', apiRouter);

module.exports = app;
