var likes = require('../projects.json');

exports.view = function(request, response){

	// if (likes['projects'].length > 6) {
	// 	temp = {
	// 		projects:
	// 		[]
	// 	}
	// 	temp.projects.push(likes['projects'].slice(6, ));
	// 	response.render('profile', temp);
	// }
	temp = {
		projects:[]
	}
	temp_list = likes['projects'].slice(6, likes['projects'].length)

	for(var i = 0; i < temp_list.length; i++){
		temp.projects.push(temp_list[i]);

   }
   console.log(temp)

	response.render('profile', temp);
};