let age = 21; // this is a number variable
let firstName = 'Dinos'; //this is a string variable
let lastName = 'Maz';//this is a string variable
let online =true; // This is a boolean variable
let nullean = null; // This is a null variable
let idnotfound = undefined; // This is an undefined variable

let fullName = firstName + ' ' +lastName;

console.log(age);
console.log(`Your name is ${firstName} ${lastName} and your age is ${age}`);
console.log(`Your name is ${fullName} and your age is ${age}`);
console.log(`are you online; ${online}`);

const h1Text = document.querySelector('h1') //this is a const, sth that doesnt change at all
console.log(h1Text.innerHTML); // this is a way to call the text from an HTML file

//Arithmetic expressions (+-*/)
var friends = 3;
friends = friends + 1; // shortcut friends +=1;
friends = friends - 1; // shortcut friends -=1;
friends = friends*2; // shortcut friends *=2;
friends = friends/2; // shortcut friends /=5;
friends = friends**2; // shortcut **=2; (lvl up in the power of 2)
var remFriends = friends % 6; // Αφηνει το ακεραιο υπολοιπο της διαιρεσης 10/6=1 και υπόλοιπο 4
console.log(`There are ${remFriends} people left out of teams`)

var friendz =10; friendz = friendz/=5; console.log(friendz);

//operetor precedence
// 1 Parenthesis
// 2 Exponents (εκθτες)
// 3 Multiply & Divide 
// 4 Addition & Subtraction

let ding = 40; let milt = 20; let pi = 3.14; let sig = 2;
var summary = (ding - milt)/pi;
var quatCircle = pi*ding**sig;
console.log(summary);
console.log(quatCircle)

//changing the datatype of a value to another 
//we have 5 defferent variables (numbers, strings, booleans, null, undefined)
//var myAge = prompt('What is you age');
//myAge = Number(myAge);//string(myAge), Boolean(myAge)
//myAge = myAge+=1;
//console.log(`HAPPY BIRTHDAY!!!!!! next year you will become ${myAge}`);
