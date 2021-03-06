/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var project = require('./routes/project');
var like = require('./routes/like');
var search = require('./routes/search');
var login = require('./routes/login');
var upload = require('./routes/upload');
var profile = require('./routes/profile');
var add = require('./routes/add');
var add_like = require('./routes/add_like');


const { response } = require('express');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/viewAlt', login.viewAlt);
app.get('/index', index.view);
app.get('/project/:id', project.view);
// app.get('/viewAlt', index.viewAlt);
app.get('/like', like.view);
app.get('/search', search.view);
app.get('/upload', upload.view);
app.get('/profile', profile.view);
app.get('/add', add.addPost);
app.get('/add_like/:id', add_like.addPost);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});