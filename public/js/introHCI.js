'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(clickLikeBtn);
}

function clickLikeBtn() {
	e.preventDefault();
	ga('create', 'UA-190109776-1', 'auto');
	ga('send', 'event', 'like', 'click');
}

function myFunctionSearch(){
	var cls = document.getElementsByClassName("project");
	
	var len = cls.length;
    var input = document.getElementById('myInput');
    var filter = input.value.toUpperCase();

  // start the index at 0;
    var n = 0;
  for (; n < len; n++) {
    var a = cls[n].getElementsByTagName("p")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cls[n].style.display = "";
        } else {
            cls[n].style.display = "none";
        }
  }
 }