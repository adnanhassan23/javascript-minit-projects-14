let quote = ["Celebrate Your Small Wins", "Surround Yourself With Motivated People", "Whatever you are, be a good one", "People who wonder if the glass is half empty or full miss the point. The glass is refillable.", "I’m alive, motivated and ready to slay the day"];


var btn = document.getElementById("btn");

var content = document.getElementById("content");

 var i = 0;
 
btn.addEventListener("click", function(){

 // i = i < 4  ? ++i : 0;
  i = i < quote.length - 1 ? ++i : 0;


  content.innerHTML = quote[i];
  
});