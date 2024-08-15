const name = "Karan";
const age = 23;

var x = "my name is " + name + "and age is " + age + ".";

// console.log(x);

// template literal
/* Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings,
 string interpolation with embedded expressions, and special constructs called tagged templates */

// console.log(`my name is ${name} and age is ${age}.`);

//String properties and methods

const myName = "karan";

// length property
x = myName.length

// Access value by key
//  console.log(myName[2]);
x = myName.charAt(5);

// uppercase the string
x = myName.toUpperCase();
// lowercase the string
x = myName.toLowerCase();
// find index of a letter in a string
x = myName.indexOf("a");
// create a substring from a string
x = myName.substring(1,3)
// slice
// diff. between slice and substring is we can take negative value in slice method 
x = myName.slice(-5,-3)
//trim
//trim is used to get rid from white space in a string
x = myName.trim();
// replace :- replace string or a word to another string or word
x = myName.replace("Karan", "Karan Singh");
// split :- split a string into an array
x = myName.split('');
// includes ;- give true or false if the part occure or not in a string 
x = myName.includes("a");

 

// uppercase the first letter of a string

x = myName.charAt(0).toUpperCase() + myName.substring(1);

console.log(x);