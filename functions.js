// default params

function user(userName = 'Bot'){
    return userName + ' is resgistered'
}

console.log(user())

// rest params

function sum(...numbers){
    return numbers;
}

// const numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(sum(0,1,2,3,4,5,6,7,8,9));

//object as params
function userDetails(user){
    return `userName is ${user.name} and age is ${user.age}`
}

const userData = {
    name : 'Karan',
    age : 23
}

console.log(userDetails(userData));

// array in params 
function userArray(arr1){
        const randomIndex = Math.floor(Math.random()*arr1.length);
        return arr1[randomIndex];
}

const arr1 = [2,3,4,5,6,7,8]

console.log(userArray(arr1));

//Scope

//Galobal Scope
// Galobal variable are accessible everywhere. var is a galobal scope


//Function Scope
//Variable are access only the functional scope. let and const are the functional scope and block scope


//Block Scope
//Variable are access only in the BLock scope or Block scope: The scope created with a pair of curly braces 

//Arrow Function
const add =(a,b)=>{
    return a + b;
}
console.log(add(5,6));

// implicit return 

const addValue = (a,b)=>a+b;
console.log(addValue(5,6));

//returning a object 
const createObj = () =>({
    name : 'Karan'
})
console.log(createObj());

// Callback 
// Callback is a function pass in to another fuction as an argument. this technique allows a function to call another function

// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();


//IIFE
//immediatley invoked function expresion. runs as soon as it is defined

(function  hello(){
    console.log("Hello");
})();

// practice 

//1. change temp fahrenheit to celsius

const fahrenheit = (F) => (F-32) *5/9

console.log(`the temprature in celsius is ${fahrenheit(32)}`);


//2. Find min and max value from an array

const arrValue = [2,3,4,5,6,7];

const minmax = (arrValue)=>{
      return console.log(`maximum value : ${Math.max(...arrValue)}, minimum value : ${Math.min(...arrValue) }`);
}

minmax(arrValue)