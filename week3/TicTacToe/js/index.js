// $('h2').css('color','blue');

// if user combination includes _winningCombination
var winningCombination = [
  [1,2,3],
  [2,3,4]
];
var userInput= [1,5,1,5,1,5];


var containsAll = false;

function won(){
  for (eachSet of winningCombination) {
    var winningNumbers = [];
    for (aNum of eachSet) {
      if (userInput.includes(aNum)) {
        winningNumbers.push(aNum);
        console.log(winningNumbers.length);
        if(winningNumbers.length == 3){console.log("you won");}
      }
    }
  }
}

console.log(winningNumbers);
