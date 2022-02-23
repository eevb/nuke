function myFunction() {
  var sec = 5;
  var timer = setInterval(function(){
      document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}


function nukeeverything() {
  setTimeout(function () {
    for (let step = 0; step < 99999999999999; step++) {
      console.log("Hello World!");
      window.close();
    }
  }, 6000);
}