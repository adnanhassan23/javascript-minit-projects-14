var colour = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF"];
var i = 0;
document.getElementById("btn").addEventListener("click", function() {
 i = i < colour.length ? ++i : 0;
 document.body.style.background = colour[i];
})
