var ayman = "ayman";

var myArr = [2, 3, 4, 5, "test", "string", true];


var myNewArr = [[9, 2, 3], [49, 22, 23], [459,662, 53]];
console.log(myNewArr);

console.log(Math.max.apply(null, myNewArr[1]));
var secondElement = myNewArr[1];
var max = Math.max.apply(null, secondElement); // get the max of the array
secondElement.splice(secondElement.indexOf(max), 1); // remove max from the array
console.log(Math.max.apply(null, secondElement)); // get the 2nd max


//get max from second element with loop
var myNewArr = [[9, 2, 3], [49, 22, 23], [459,662, 53]];
secondElement = myNewArr[1];
var maxNum = 0;
for (var i = 0; i < secondElement.length; i++) {
	if (maxNum<secondElement[i]) {
			maxNum = secondElement[i];
	}
}
console.log(maxNum);

// get sencond highest
secondElement.splice(secondElement.indexOf(max), 1); // remove max from the array
var maxNum = 0;
for (var i = 0; i < secondElement.length; i++) {
	if (maxNum<secondElement[i]) {
			maxNum = secondElement[i];
	}
}
console.log(maxNum);

// now to find sum
var myNewArr = [[9, 2, 3], [49, 22, 23], [459,662, 53]];
secondElement = myNewArr[1];
var sum = 0;
for (var i = 0; i < secondElement.length; i++) {
		sum = sum + secondElement[i];
}
console.log(sum);

// merge maxNUm and sum
var myNewArr = [[9, 2, 3], [49, 22, 23], [459,662, 53]];
secondElement = myNewArr[1];
var sum = 0;
for (var i = 0; i < secondElement.length; i++) {
		sum = sum + secondElement[i];
		if (maxNum<secondElement[i]) {
				maxNum = secondElement[i];
		}
}
console.log(sum);
console.log(maxNum);

// do for all arrays
// merge maxNUm and sum
var myNewArr = [[9, 2, 3], [49, 22, 23], [459,662, 53]];
var sum = 0;
for (var row = 0; row < myNewArr.length; row++) {
	for (var col = 0; col < myNewArr[row].length; col++) {
			sum = sum + myNewArr[row][col];
			if (maxNum<myNewArr[row][col]) {
					maxNum = myNewArr[row][col];
			}
	}
}

console.log(sum);
console.log(maxNum);
