$(document).ready(function(){

  var score = 0;
  var count = 0;
  var missed = 0;
  var speed = 2500; // speed at which moles pop up
  var slideSpeed = 1000; // time moles stay up for
  var time = 5000; // 40 seconds


  // get the text
  var text = $('#score').text();

startTimer(); // stats countdown for 40 seconds
popOut(); // mole pops out

function startTimer(){
  setInterval(function(){
    if (time >= 0.1) { // set to 0.1 because needed time to react.
      time = time - 100; // every second it goes down by 1.
      $('#time').html(time/1000); // sets time attribute in HTML.
    }
  }, 100); // 1 second
}



function popOut(){
  if  (time <= 1000) { // at the end of the game
    $('.mole').stop(); // stop all animations
  }
  else { // if it is not the end of the game
    var randomNumber = Math.floor(Math.random() * 8); // random number from 0 to 8, rounded down.
    aMole = $(".mole:eq( "+ randomNumber +" )"); // specific index in mole
    count++;
    missed = count - score -1; // updates missed
    $('#missed').html(missed);  // prints missed to html file
    aMole.show(); // mole appearss
    aMole.animate({marginTop: -100}); // slide up

    // animation
    setTimeout(function() { //wait 2 seconds
      aMole.animate({
                 marginTop : -10 // slide down
             }, function() {
                 aMole.hide(); // disappear only after slide
             });
      }, slideSpeed); //time moles stay up for

      speed = speed - 8; // best number after testing speeds
      slideSpeed = slideSpeed -50; // best number after testing speeds
  }
  if (time <= 2000) { // if time is up
    $('#gameOverRow').show(); // displayes game over in html page

    //set the item in localStorage
    if (localStorage.getItem('score')< score) {
      localStorage.setItem('score', score);
      $('#gameOver').html("<h2>Congratulations, you have the new high score!</h2>");
    }
    $('#topScore').html(localStorage.getItem('score'));
    $('#topScoreRow').show();
  }
  else {
      setTimeout(popOut, speed); // invokes itself to go again at a faster speed (slideSpeed = slideSpeed -50)
  }
}

  $('.mole').on('click', function(){ // when a mole is clicked
    $(this).hide(); // mole diappears
    score++;
    $('#score').html(score);// display score in html file
  });

  $('#restart').on('click', function(){ // when the restart button is clicked
    location.reload();  // all is set back to the beginning
  });

  

}); // finish all
