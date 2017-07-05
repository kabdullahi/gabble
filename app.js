const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const path = require('path');
const session = require('express-session');
const validator = require('express-validator')

const app = express();

const router = require('./routes/routes.js')

app.use(express.static(path.join(__dirname, 'public')));

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(validator());

app.use(session({
  secret: 'anything kjreetbgkjbrs',
  resave: false,
  saveUninitialized: false
}));

app.use(router);

app.listen(3000, function(req, res){
  console.log('localhost:3000.....IM ON!!');
});
