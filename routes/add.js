var projects = require('../projects.json');
// var data = require("../data.json");
// var datafound = require("../data-found.json");
// var mylost = require("../mylost.json");


exports.addPost = function(request, response) {  

    // var id = projects.projects.length+1;
    var id = projects.projects.slice(-1)[0]['id'] + 1;
    var name = request.query.recipeName;
    var image = request.query.myFile;
    var videolink = request.query.myFile;
    var ingredient = request.query.ingredients;
    var process = request.query.Process;
    var time_estimate = request.query.TimeEstimate;


    var todaysLab = {
        "id": id,
        "name": name,
        "image": image,
        "videolink": videolink,
        "ingredient": ingredient,
        "process": process,
        "time_estimate":time_estimate
    };

    
    projects.projects.push(todaysLab);
    // projects.projects.unshift(todaysLab);
    // projects.projects.pop();
    // console.log(projects.projects);

    response.render('index', projects);
    // response.render('project', projects);

 // var name = request.query.name;
 // var description = request.query.description;
    // var loc = request.query.lastseen;
 // var image = request.query.image;
 // var lost_found = request.query.lost_found;
 // var contact = request.query.contact;
 // var date = new Date();

 // if (lost_found == "lost") {
    //   var id = data.posts.slice(-1)[0]['id'] + 1;
    //   var newPost = { "id":id, "name":name, "description":description, "lastseen":loc, "image":image,"date":date,"contact":contact};
    //   mylost.lostposts.push(newPost);
    //   console.log(mylost);
   //  data.posts.unshift(newPost);
 //  response.render('lost', data);
 // } else {
    //   var id = data.posts.slice(-1)[0]['id'] + 1;
    //   var newPost = { "id":id, "name":name, "description":description, "lastseen":loc, "image":image,"date":date,"contact":contact};
    //   mylost.foundposts.push(newPost);
 //  datafound.posts.unshift(newPost);
 //  response.render('lost', datafound);
 // }
    
    
}