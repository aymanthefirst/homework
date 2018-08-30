// for each buuton get value and display on screen
// getElementsByClassName('buttonNum');
var display = document.getElementById('screen');


// make AC work
var clear = document.getElementsByClassName('buttonClear')[0];
clear.addEventListener("click", function functionName() {
  display.innerHTML  = "";
});

//Make equals work
var isEqual = document.getElementsByClassName('equals')[0];
isEqual.addEventListener("click", function functionName() {
  // code for equals
  	display.innerHTML  = 	eval(display.innerHTML);
});


// operators
// numbers
var ops = document.getElementsByClassName('operator');
for (let op = 0; op < ops.length; op++) {
  ops[op].addEventListener("click", function functionName() {
    var theOp = ops[op].textContent;
    display.innerHTML  += theOp;
  });
}


// numbers
var buttons = document.getElementsByClassName('buttonNum');
for (let but = 0; but < buttons.length; but++) {
  buttons[but].addEventListener("click", function functionName() {
    var num1 = buttons[but].textContent;
    display.innerHTML  += num1;
  });
}




// for (let button in buttons) {
//       console.log(button.value);
// }


// console.log(getElementsByClassName('buttonNum')[0].textContent);
// and store it in a variable
//
// now do the same for the simbols
//
// now for the second number
//
// calculate and siplay result
