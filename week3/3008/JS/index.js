document.addEventListener('DOMContentLoaded', function(){

    console.log("Loaded");

var buttons = document.querySelectorAll('.myButtons');
for (var i = 0; i < buttons.length; i++) {

  var button = buttons[i];
  button.addEventListener('click', function(){
    console.log(this.textContent);
  });
}

var myForm = document.getElementById('myform');
myForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log("Form submited "+ event);
});

// ------------------------------------------------------
    var div1 = document.getElementById('div1');
    div1.addEventListener('click', function() {
      console.log("div 1 was clicked");
    });

    var div2 = document.getElementById('div2');
    div2.addEventListener('click', function() {
      console.log("div 2 was clicked");
    });

    var div3 = document.getElementById('div3');
    div3.addEventListener('click', function() {
      event.stopPropagation();
      console.log("div 3 was clicked");
    }, {once:true});

    var but1 = document.getElementById('but1');
    // but1.addEventListener('click', function(){
    //   console.log("but1 was clicked");
    // });

    // to work properly, function should be without brackets
    function clicked(){
      console.log("but1 was clicked");
    }
    but1.addEventListener('click', clicked);

});
