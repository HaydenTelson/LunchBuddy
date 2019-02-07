
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.viewFood = function(req, res){
  res.render('food');
};