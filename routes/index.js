var indexs = require('../projects.json')['projects']

/*
 * GET home page.
 */

// exports.view = function(request, response){
// 	projects['viewAlt'] = false;
// 	response.render('index', projects);
	  
// };

// exports.viewAlt = function(request, response){
// 	projects['viewAlt'] = true;
// 	response.render('index', projects);
// }

exports.indextInfo = function(request, response) {
	var indexID = request.params.id;
	var index = getIndexData(indexID);
  	response.json(index);
}

exports.view = function(request, response) {
	var indexID = request.params.id;
	var index = getIndexData(indexID);
	response.render('index', index);
}

function getIndexData(indexID) {
	if (indexID == "random") {
		indexID = Math.floor(Math.random() * indexs.length) + 1;
	} else {
		indexID = parseInt(indexID);
	}
  	var index = indexs[indexID-1]; // of by one, our first project has index 0
  	return index;	
}