window.onload = function() {
    Particles.init({
      selector: ".particles",
      color: ['#b1dcf5','#f5b1c2'],
      connectParticles: true,
      maxParticles: 50,
      sizeVariations: 5,
      speed: 0.7,
    });
};

const switch_theme = document.getElementById("switch");
const main_menu = document.querySelector("#top-bars");
const nav_drawer = document.querySelector(".nav-drawer");
const nav_hider = document.querySelector(".shade");
const body = document.querySelector("body");
const anchor = nav_drawer.querySelectorAll(".nav-list > a");

// Hide the nav at start
// switch_theme.style.display = "none"
nav_drawer.style.display = "none";
nav_hider.style.display = "none";
var isOpen = false;

//If the shadow is clicked, hide the nav.
nav_hider.addEventListener("click", () =>{
  nav_drawer.style.display = "none";
  nav_hider.style.display = "none";
  isOpen = false;
});




//DIsplay the drawer of click
main_menu.addEventListener("click", function(){
  nav_drawer.style.display = "flex";
  nav_hider.style.display = "block";
  isOpen = true;
  //stopScroll();
});

// When user click on any anchor tag, close the drawer
for (const a in anchor) {
  //console.log("equal");
  anchor[0].addEventListener("click", () =>{
    nav_drawer.style.display = "none";
    nav_hider.style.display = "none";
  });
  anchor[1].addEventListener("click", () =>{
    nav_drawer.style.display = "none";
    nav_hider.style.display = "none";
  });
  anchor[2].addEventListener("click", () =>{
    nav_drawer.style.display = "none";
    nav_hider.style.display = "none";
  });
  anchor[3].addEventListener("click", () =>{
    nav_drawer.style.display = "none";
    nav_hider.style.display = "none";
  });
  anchor[4].addEventListener("click", () =>{
    nav_drawer.style.display = "none";
    nav_hider.style.display = "none";
  });
 
}



const  stopScroll = function (){
  body.style.overflow = "hidden";
  body.style.height = "100%";
  body.style.margin = "0";
}

// Theme switching:
let themeValue = localStorage.getItem("theme");
if (themeValue == null){
  setTheme("light");
}else{
  setTheme(themeValue);
}


const theme_circle = document.getElementsByClassName("circle");


for (var i = 0; i < theme_circle.length; i++) {
  theme_circle[i].addEventListener("click", function() {
    let theme = this.dataset.theme;
    // console.log("Clicked on", theme);
    setTheme(theme);
  });
}

function setTheme(theme){
  if (theme == "light") {
    document.getElementById("theme-switcher").href = 'light.css'
  }
  if (theme == "dark") {
    document.getElementById("theme-switcher").href = 'dark.css'
  }
  if (theme == "purple") {
    document.getElementById("theme-switcher").href = 'purple.css'
  }
  if (theme == "blue") {
    document.getElementById("theme-switcher").href = 'blue.css'
  }

  localStorage.setItem("theme", theme);
}