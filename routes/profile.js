var likes = require('../like.json');

exports.view = function(request, response){
 response.render('profile', likes);
};