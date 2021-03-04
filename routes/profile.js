var profiles = require('../projects.json')['projects'];

exports.profileInfo = function(request, response) {
	var profileID = request.params.id;
	var profile = getProfileData(profileID);
  	response.json(profile);
}

exports.view = function(request, response) {
	var profileID = request.params.id;
	var profile = getProfileData(profileID);
	response.render('profile', profile);
}

function getProfileData(profileID) {
	if (profileID == "random") {
		profileID = Math.floor(Math.random() * profiles.length) + 1;
	} else {
		profileID = parseInt(profileID);
	}
  	var profile = profiles[profileID-1]; // of by one, our first project has index 0
  	return profile;	
}