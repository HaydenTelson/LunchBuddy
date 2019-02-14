/*
 * GET home page.
 */

var data = require("../data.json")

exports.view = function(req, res){
  res.render('index');
};

exports.viewList = function(req, res){
  res.render('list', {"cogsStudying": data.events[0], "freeFood": data.events[1], "improvShow": data.events[2]});
};

exports.viewCreate = function(req, res){
  res.render('create');
};

exports.viewMyEvents = function(req, res){
  res.render('myEvents', {"cogsStudying": data.events[0], "freeFood": data.events[1], "improvShow": data.events[2]});
};

exports.viewMap = function(req, res){
  res.render('map');
};

exports.viewHome  = function(req, res){
  res.render('home');
};