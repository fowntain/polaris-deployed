var defaultStylesheet = "/css/themes/theme-flamingo.css";

function changeStylesheet(newStylesheet) {
  var stylesheet = document.getElementById("stylesheet");
  stylesheet.setAttribute("href", newStylesheet);
  localStorage.setItem("selectedStylesheet", newStylesheet);
}

window.addEventListener('load', function() {
  var selectedStylesheet = localStorage.getItem("selectedStylesheet");
  if (selectedStylesheet) {
    var stylesheet = document.getElementById("stylesheet");
    stylesheet.setAttribute("href", selectedStylesheet);
  } else {
    var stylesheet = document.getElementById("stylesheet");
    stylesheet.setAttribute("href", defaultStylesheet);
    localStorage.setItem("selectedStylesheet", defaultStylesheet);
  }
});
