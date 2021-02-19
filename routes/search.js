
var searchs = require('../projects.json')['projects'];

exports.searchInfo = function(request, response) {
	var searchID = request.params.id;
	var search = getSearchData(searchID);
  	response.json(search);
}

exports.view = function(request, response) {
	var searchID = request.params.id;
	var search = getSearchData(searchID);
	response.render('search', search);
}

function getSearchData(searchID) {
	if (searchID == "random") {
		searchID = Math.floor(Math.random() * searchs.length) + 1;
	} else {
		searchID = parseInt(searchID);
	}
  	var search = searchs[searchID-1]; // of by one, our first project has index 0
  	return search;	
}