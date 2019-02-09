
/*
 * GET home page.
 */

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
  res.render('myEvents');
};

exports.viewMap = function(req, res){
  res.render('map');
};