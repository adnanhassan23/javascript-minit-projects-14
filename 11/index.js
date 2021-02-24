
const btn = document.getElementById("btn");


btn.addEventListener('click', changeBackground)

function changeBackground(){
  //Choose a random color

const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

const colorIndex= Math.floor(Math.random()*colors.length);
document.body.style.backgroundColor = colors[colorIndex]
}