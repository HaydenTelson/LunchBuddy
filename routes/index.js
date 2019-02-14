/*
 * GET home page.
 */

var data = require("../data.json")

exports.view = function(req, res){
  res.render('index');
};

exports.viewList = function(req, res){
  res.render('list', data);
};

exports.viewCreate = function(req, res){
  res.render('create');
};

exports.viewMyEvents = function(req, res){
  res.render('myEvents', data);
};

exports.viewMap = function(req, res){
  res.render('map');
};

exports.viewHome  = function(req, res){
  res.render('home');
};