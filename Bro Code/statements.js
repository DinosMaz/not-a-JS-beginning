console.log(`-----------------STATMENTS----------------------------`)
console.log(`----------------IF STATEMENT--------------------------`)
//If statement is a basic form a decision making. So, if a conditional is true, do it, 
//or else do this, or else do this. Easy game, easy life

let mineAge = 31 // var age is used in another js file, so we used mineAge
if (mineAge >= 85){ 
    console.log('You are almost dead')
  } 
  else if (mineAge >= 65){
    console.log('You are not a long way to RIP')
  } 
  else if (mineAge >= 18){ 
    console.log(`You are ${mineAge} years old`)
    console.log('You are a young and powerfull person')
    console.log('You have a life to live, be nice')
    console.log(`We love you with all our heart`)
  } 
  else if (mineAge < 0){
    console.log('Are you kidding me, dude?')
  } 
  else {console.log('You are just a kid, go play in your room')
}

let online = true;
if (online == true){
  console.log(`You are online, idiot`) 
} else { console.log(`You are offline, idiot`)}

let offline = true;
if (offline){ // cause offline type is boolean(true or false) we can write it this way too
  console.log(`You are offline, idiot`) 
} else { console.log(`You are online, idiot`)}

console.log(`--------------SWITCH STATEMENT------------------------`)
//Switch statement evaluates a value/expression, matches the value to many causes, 
//moire efficient than many "else if" statement
var grade = "All";

switch (grade){
  case "A": console.log(`you did great`); break; // must have a break statemnt
  case "B": console.log(`You did good`); break;
  case "C": console.log(`You did Ok`); break;
  case "D": console.log(`You ..... didnt do that well`); break;
  case "F": console.log(`YOU FAILED!!!!!`); break;
  default: console.log(`${grade} is not a letter grade`);//dont need break
}
console.log(`--------------LOGICAL CONDITIONS------------------------`)
// && and (checks if both conditions are true)
// || or (checks if one of the conditions is true)
// ! not (reverses boolean value)