//JSON
//json stands for javascript object notion.json is a text formatter used to store and transporting data 
//json is self-describing and easy to understand 


const user = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
];
// json has built-in function to convery javascript object to json string, used to send data in pure string format to server 
const str = JSON.stringify(user);
// json has built-in function to convert json string into javascript object, used to receive pure text from a server and use it as a JavaScript object
const str2 = JSON.parse(str)
console.log(str2);
console.log(str);
