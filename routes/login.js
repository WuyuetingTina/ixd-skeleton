var logins = require('../projects.json');

// exports.projectInfo = function(request, response) {
// 	var loginID = request.params.id;
// 	var login = getProjectData(loginID);
//   	response.json(login);
// }

// exports.view = function(request, response) {
// 	var loginID = request.params.id;
// 	var login = getProjectData(loginID);
// 	response.render('login', login);
// }

// function getProjectData(loginID) {
// 	if (loginID == "random") {
// 		loginID = Math.floor(Math.random() * logins.length) + 1;
// 	} else {
// 		loginID = parseInt(loginID);
// 	}
//   	var login = logins[loginID-1]; // of by one, our first project has index 0
//   	return login;	
// }

exports.view = function(request, response){
	console.log('okay');
	logins['viewAlt'] = false;
	response.render('login', logins);
	  
};

exports.viewAlt = function(request, response){
	logins['viewAlt'] = true;
	response.render('login', logins);
}