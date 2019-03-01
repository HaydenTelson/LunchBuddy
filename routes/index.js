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

exports.viewBVersion = function(req, res){
  res.render('bVersion', data)
}

//Take in the information from the create event form, store it data.JSON, then redirect client to myEvents
exports.createEvent = function(req,res){
  console.log(req.body);
  var total = 0;
  for(var i = 0; i < Object.keys(data).length; i++)
  {
    total += data[Object.keys(data)[i]].length;;
  }

  req.body.id = "" + ++total;

  console.log(req.body);
  console.log(req.body.eventType);
  console.log(data[req.body.eventType]);

  data[req.body.eventType].push(req.body);
  console.log(data);
  fs.writeFileSync("data.json", JSON.stringify(data, null, 4));
  res.render('myEvents', data);
}

