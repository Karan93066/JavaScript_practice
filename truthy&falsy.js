// falsy values
// false
// 0
// "" or '' (empty string)
// null 
// undefined
// NaN (Not a Number)

// truthy values 
// true
// '0' (0 in a string)
// ' ' (space in a string)
// [] (empty array)
// {} (empty object)
// function(){} (function expression) 

let x = false;

if(x){
    console.log("console if value is true");
}
else{
    console.log("console if value is false");
}
console.log(Boolean(x));
