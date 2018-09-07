// // var outVariable = 5;
// // function doSmth(){
// // 	var inside = 10;
// //
// // 	console.log(outVariable);
// //
// // }
// // function doSmth(string1, string2)
// // {
// // 	var newString = string1+string2;
// // 	var insideVar = 10;
// // 	console.log("inside do smth");
// //
// // 	firstFunc();
// // 	function firstFunc(){
// // 		console.log(outVariable);
// //
// // 		console.log("halil");
// // 	}
// // }
// //
// // doSmth("greeting", "name");
//
//
// function joinStringAndPrint(string1, string2){
// 	var newString = string1 + string2;
// 	function printString(string) {
// 		console.log(string);
//
// 		console.log(newString);
// 		console.log(string1 + string2);
// 	}
// 	printString(newString);
// 	return newString;
// }
// var string1 = "hello";
// var string2 = "world";
// joinStringAndPrint(string1, string2);
//
// // printString("a string");
//
// // console.log(newString);

//
// function sayHi(){
// 	console.log("hi ");
// }
// function funcCaller(funcToRun) {
// 	funcToRun();
// }
// funcCaller(sayHi);
//
// // second example
// var myString = "the timer finised";
//
// function onTimerComplete(){
// 	console.log(myString);
// }
// // setTimeout(onTimerComplete, 3000);
//
//
// // third example
// function createCounter() {
// 	var total = 0;
// 	console.log("t
// 	otal inside: " + total);
// 	return function(){
// 		total++;
// 		console.log("total after: " + total);
//
// 		return total;
// 	}
// }
//
// var counter = createCounter();
// counter();
// counter();
// counter();
//
// var total = counter();
// console.log(total);

// for (var i = 0; i < 10; i++) {
// 	setTimeout(function(){console.log(i);}(i),i*5000);
// }


// function start(counter){
// 	if (counter<10) {
// 		setTimeout(function(){
// 			counter++;
// 			console.log(counter);
// 			start(counter);
// 		}, counter*1000);
// 	}
// }
// start(0);


var person = new Object();

person.name = "Halil";
person.age = 100;
person.friends = ["steve", "tim"];
person.male = true;

person.sayHello = function(){
	console.log("Hello");
}
console.log(person);
console.log(person.name);
console.log(person.age);
person.sayHello();

var myArr = [1,2,3,6];
console.log(myArr.length);


function Person(firstName, age, gender){
	this.firstName = firstName;
	this.age = age;
	this.male = gender;
}

var halil = new Person("Halil", "24", "male");
var jeny = new Person("jeny", "23", "female");
console.log(halil);
console.log(jeny);

var otherPerson = function(name, age){
	this.name = name;
	this.age = age;
	this.sayHello = function() {
		console.log("hello from steve");
	}
}

var person1 = new otherPerson("rich", 23);
var person2 = new otherPerson("sara", 47);

console.log(person2);

console.log(person1.name);


var person = {
	name: "steve",
	age: 54,
	sayHello: function(){
		console.log("hi my name is" + this.name);
	}
}

person.sayHello();

var data = {
	class_name: "Academy class",
	teacher: {
		name: "joe",
		age:150
	},
	lessons: [
		{name: "Scope and Closures",
		info: "js lessons",
	},
	{
		name: "objects",
		info: "js lesson after closures"
	}
	]
}
