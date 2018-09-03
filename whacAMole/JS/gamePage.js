$(document).ready(function(){


  $('.mole').show(); // mole appears
  $('.mole').animate({marginTop : -100}); // slide up
  setTimeout(function() { //wait 2 seconds
    $('.mole').animate({
               marginTop : 20 // slide down
           }, function() {
               $('.mole').hide(); // disappear only after slide
           });
    }, 2000);





  $(".col-3").click(function(){
      $(".mole").hide();
  });





});
