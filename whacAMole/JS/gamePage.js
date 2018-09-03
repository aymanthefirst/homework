$(document).ready(function(){

  var score = 0;
  var count = 0;
  var missed = 0;;
  var itterator = 1000;





  (function play() {
      var interval = 1001;
      timer = function()
      {
          interval = interval*0.99;
          //do your thing here
          var randomNumber = Math.floor(Math.random() * 8); // gets random number
            popOut($(".mole:eq( "+ randomNumber +" )"));

          if (missed <= 3) {
              setTimeout(timer, interval);
          }
          else {
            alert("Game over!");
          }
        };
        $.when(timer()).done(timer());

  })();




  function popOut(aMole) {
    count++;
    console.log(count);
    $('#count').html("Count: "+ count);
    aMole.show(); // mole appearss
    aMole.animate({marginTop: -100}); // slide up
    setTimeout(function() { //wait 2 seconds
      aMole.animate({
                 marginTop : -10 // slide down
             }, function() {
                 aMole.hide(); // disappear only after slide
                 missed++;
                 $('#missed').html("Missed: "+ missed);
             });
      }, 2000);
  }


    $('.mole').on('click', function(){
      $(this).hide();
      score++;
      $('#score').html("Score: "+ score);
    });


}); // finish all
