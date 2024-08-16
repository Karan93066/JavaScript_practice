// let x;

x = Math.sqrt(36);

x = Math.abs(-5);

x = Math.round(5.374);

x = Math.ceil(4.2);

x = Math.floor(4.9);

x = Math.random();

x = Math.floor(Math.random()*10+1);

x = Math.pow(4,2);

x = Math.min(3,4,5,6,2);

x = Math.max(4,3,5,10);

console.log(x);

//Practice
var x = Math.floor(Math.random()*100 +1);
var y = Math.floor(Math.random()*50 +1);
var sum = x+y;
var diff = x-y;
var multiply = x*y;
var divide = x/y;
var remainder = x%y;
var sumOutput = `Value of x : ${x} and y : ${y}. Sum of x and y is ${sum}`;
var diffOutput = `Value of x : ${x} and y : ${y}. Sum of x and y is ${diff}`;
var multiplyOutput = `Value of x : ${x} and y : ${y}. Sum of x and y is ${multiply}`;
var divideOutput = `Value of x : ${x} and y : ${y}. Sum of x and y is ${divide}`;
var remainderOutput = `Value of x : ${x} and y : ${y}. Sum of x and y is ${remainder}`;

console.log(sumOutput);
console.log(diffOutput);
console.log(multiplyOutput);
console.log(divideOutput);
console.log(remainderOutput);
