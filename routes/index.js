/*
 * GET home page.
 */

var data = require("../data.json")
var fs = require('fs');

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

//Take in the information from the create event form, store it data.JSON, then redirect client to myEvents
exports.createEvent = function(req,res){
  console.log(req.body);
  data[req.body.eventType].push(req.body);
  console.log(data);
  fs.writeFileSync("data.json", JSON.stringify(data, null, 4));
  res.render('myEvents', data);
}