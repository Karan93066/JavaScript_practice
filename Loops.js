// For Loop
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for(let i = 0; i<=10;i++){
//     console.log(`number ${i}`);
    
// }

//Break
// The break statement "jumps out" of a loop

// for(let i =0;i<=10;i++){
//     if(i===6){
//         console.log(`this is the best number ${i}`);
//         break;
//     }
// }


//Continue
// The continue statement "jumps over" one iteration in the loop

// for(let i =0;i<=10;i++){
//     console.log(i)
//     if(i===6){
//         console.log(`this is the worst number has been deleted`);
//         continue;
//     }
// }

//for each



//practice

for(let i = 1;i<=100;i++){
    if(i%5 === 0 && i%3 === 0 ){
        console.log("FizzBuzz")
    } 
   else if(i%3 === 0){
        console.log("Fizz")
    }
    else if(i%5 === 0){
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}


