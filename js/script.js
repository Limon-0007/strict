new WOW().init();

let navbar = document.getElementById("navBar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// dark mode

// function addDarkmodeWidget() {
//   new Darkmode().showWidget();
// }
// window.addEventListener("load", addDarkmodeWidget);

// const options = {
//   bottom: "64px", // default: '32px'
//   right: "unset", // default: '32px'
//   left: "42px", // default: 'unset'
//   time: "0.3s", // default: '0.3s'
//   mixColor: "#fff", // default: '#fff'
//   backgroundColor: "#fff", // default: '#fff'
//   buttonColorDark: "#100f2c", // default: '#100f2c'
//   buttonColorLight: "#fff", // default: '#fff'
//   saveInCookies: true, // default: true,
//   label: "🌓", // default: ''
//   autoMatchOsTheme: true, // default: true
// };

// let dark = document.getElementsByClassName("darkmode-toggle");

// const darkmode = new Darkmode(options);
// new Darkmode().showWidget();
