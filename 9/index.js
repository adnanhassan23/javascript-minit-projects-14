function showtime (){
    var today = new Date();
    var s = today.getSeconds();
    var m = today.getMinutes();
    var h = today.getHours();
    var month = today.getMonth();
    var date = today.getDate();
    var year = today.getFullYear();
    var pm_am = "AM";
    var fullmonth = ["January" , "February" , "March" , "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
   var monthname = fullmonth[month];
    
    if(h >= 12){ pm_am = "PM"; }
     if ( h > 12 ) { h = h % 12; }
    if(h == 0){ h = 12; pm_am = "AM";} /* To display "0" as "12 AM" */
     if(h < 10){ h = "0" + h; }
    if(m < 10){ m = "0" + m; }
    if(s < 10){ s = "0" + s; }
  
  
    
    var time = document.getElementById('time').innerHTML = (h + " : " + m + " : " + s + " " + pm_am);
  
    var date = document.getElementById('showD').innerHTML = (monthname + "  " + date + " " + year);
  
  };
  setInterval(showtime, 1000)