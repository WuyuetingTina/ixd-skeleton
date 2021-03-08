
var uploads = require('../projects.json')['projects'];

exports.uploadInfo = function(request, response) {
	var uploadID = request.params.id;
	var upload = getUploadData(upload);
  	response.json(upload);
}

exports.view = function(request, response) {
	var uploadID = request.params.id;
	var upload = getUploadData(uploadID);
	response.render('upload', upload);
}

function getUploadData(uploadID) {
	if (uploadID == "random") {
		uploadID = Math.floor(Math.random() * uploads.length) + 1;
	} else {
		uploadID = parseInt(uploadID);
	}
  	var upload = uploads[uploadID-1]; // of by one, our first project has index 0
  	return upload;	
}