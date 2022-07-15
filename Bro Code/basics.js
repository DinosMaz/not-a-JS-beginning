console.log('--------------THE VERY BASICS-------------------------')


let ageb = 21; // this is a number variable
let firstNameb = 'Dinos'; //this is a string variable
let lastNameb = 'Maz';//this is a string variable
let onlineb =true; // This is a boolean variable
let nulleanb = null; // This is a null variable
let idnotfoundb = undefined; // This is an undefined variable

let fullNameb = firstNameb + ' ' +lastNameb;

console.log(ageb);
console.log(`Your name is ${firstNameb} ${lastNameb} and your age is ${ageb}`);
console.log(`Your name is ${fullNameb} and your age is ${ageb}`);
console.log(`are you online; ${onlineb}`);

const h1Text = document.querySelector('h1') //this is a const, sth that doesnt change at all
console.log(h1Text.innerHTML); // this is a way to call the text from an HTML file

console.log(`--------------SOME ARITHMETICS-------------------------`)

//Arithmetic expressions (+-*/)
var friends = 3;
friends = friends + 1; // shortcut friends +=1;
friends = friends - 1; // shortcut friends -=1;
friends = friends*2; // shortcut friends *=2;
friends = friends/2; // shortcut friends /=2;
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

console.log(`--------------SOME ARITHMETICS-------------------------`)
var myNum;
myNum=Math.round(3.5); //round
console.log (myNum)
myNum=Math.floor(3.8); //round to bot
console.log (myNum)
myNum=Math.ceil(3.1); //round to top
console.log (myNum)
myNum=Math.pow(3,5); // 3*3*3*3*3, 3 to power of 5
console.log (myNum)
myNum=Math.sqrt(64);// 8 
console.log (myNum)
myNum=Math.abs(-90); // absolute number 
console.log (myNum)
myNum=Math.min(3, 5, 7, 2, 9, 1,); 
console.log (myNum)
myNum=Math.max(3, 5, 7, 2, 9, 1,); 
console.log (myNum)
myNum=Math.PI; 
console.log (myNum)
myNum=Math.E 
console.log (myNum)
// more do exist, just use . after Math and it gives you the list

//solve the hypotenuse of a right triangle
var aaa = 3
var bbb = 4
ccc = Math.sqrt(Math.pow(aaa, 2) + Math.pow(bbb, 2))
console.log(`the hypotenus is ${ccc} cm`)


console.log(`--------------RANDOM NUMBRS-------------------------`)
let randNum;
randNum = Math.random(); // this is random number between 0 and 1
console.log(randNum);
randNum = Math.round(Math.random()*6);//random solid number from 0 to 5
console.log(randNum);
randNum = Math.round(Math.random()*6)+1;//random solid number from 1 to 6
console.log(randNum);

//or create a fuction for a random number, why not

function getRandomNum (minn, maxx){
  return Math.floor(Math.random()*(maxx-minn + 1)+minn)
}randNum = getRandomNum(11, 99)
console.log(randNum)