const express = require('express');
const router = express.Router();
const models = require('../models');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');

router.get('/signup', function(req, res) {
  res.render('signup')
})

router.post('/signup', function(req, res) {
  var data = {
    name: req.body.name,
    password: req.body.password
  };
  models.users.create(data).then(function() {
    res.redirect('/')
  });
})

router.get('/', function(req, res) {
  res.render('login')
})

router.post('/login', function(req, res) {
  models.user.findOne({
    where:{
      username: req.body.name,
      password:req.body.password
    }
  }).then(function() {
    res.redirect('/')
  })
  
})

module.exports = router;
