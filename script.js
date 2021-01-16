// Task 10 Homework3Extra
let cupsOrdered = 25;
let cupsValue = Math.floor(cupsOrdered / 6);
let result = cupsValue + cupsOrdered;
console.log(result);

// Homework 4
//Exercise 1
let person = ["John", "happy", "reading"];
function tellStory(name,mood,activity){
    console.log(`This ${name} is a nice person.Today they are ${mood}.They are ${activity} all day.`);
}
tellStory(person[0],person[1],person[2]);


//Exercise 2
let numbers = [1,2,3,4,5];

function sumNumbers(number){
    console.log(number.reduce((a,b) => a+b,0))
}
sumNumbers(numbers);