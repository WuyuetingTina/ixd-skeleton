var projects = require('../like.json');
var originalpro = require('../projects.json');
// var data = require("../data.json");
// var datafound = require("../data-found.json");
// var mylost = require("../mylost.json");


exports.addPost = function(request, response) {  
   var projectID = request.params.id;
   var todaysLab = originalpro['projects'][projectID-1];
   var add_no = false;


   for(var i = 0; i < projects['projects'].length; i++){
      console.log('in loop');
      console.log(projects['projects'][i]['id']);
      console.log(projectID);

      if(projects['projects'][i]['id'] == projectID) {
         console.log('already exist');
         add_no = true;
      }
   }
   if (add_no == false) {
      projects.projects.push(todaysLab);
   }
   
    // projects.projects.unshift(todaysLab);
    // projects.projects.pop();
    // console.log(projects.projects);

   response.render('like', projects);
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