

// exports.viewLike = function(req, res) {
//     res.render('like');
// }


var likes = require('../projects.json')['projects'];

exports.likeInfo = function(request, response) {
	var likeID = request.params.id;
	var like = getLikeData(likeID);
  	response.json(like);
}

exports.view = function(request, response) {
	var likeID = request.params.id;
	var like = getLikeData(likeID);
	response.render('like', like);
}

function getLikeData(likeID) {
	if (likeID == "random") {
		likeID = Math.floor(Math.random() * likes.length) + 1;
	} else {
		likeID = parseInt(likeID);
	}
  	var like = likes[likeID-1]; // of by one, our first project has index 0
  	return like;	
}