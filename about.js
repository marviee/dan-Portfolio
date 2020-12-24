// NAVIGATION BAR - MOBILE VIEW
function myFunction() {
  var x = document.getElementById("myNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {x.className = "navBar";}
}

// GO-tO-TOP BUTTON
var mybutton = document.getElementById("mytop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {mybutton.style.display = "none";}
}


function functionAbout(){
}
