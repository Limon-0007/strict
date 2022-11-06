new WOW().init();

let navbar = document.getElementById("navBar");

window.addEventListener ("scroll", function () {
  if (window.pageYOffset > 500) 
  {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
