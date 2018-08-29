// prints all prime number till 177
function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

display(77);
// -------------------------------------------------


// guessing game
var ranNum = Math.floor(Math.random() * 100);
do {
var guess = prompt("take a guess");
if (guess == ranNum) {
	alert("you guessed correct!");
}
else{
    if (guess > ranNum) {
      alert("too hight!");
    }
    else{
      if (guess < ranNum) {
        alert("too low!");
      }}
  } }while (guess != ranNum);


// test it
//----------------------------------------------------------------------
