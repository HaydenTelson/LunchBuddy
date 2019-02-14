
/*
 * GET home page.
 */

 var data = require("../data.json")

exports.view = function(req, res){
  res.render('index');
};

exports.viewList = function(req, res){
  res.render('list');
};

exports.viewCreate = function(req, res){
  res.render('create');
};

exports.viewMyEvents = function(req, res){
  res.render('myEvents', {"event": data.event[0]});
};

exports.viewMap = function(req, res){
  res.render('map');
};

exports.viewHome  = function(req, res){
  res.render('home');
};