/* a function is a block of code designed to perform 
  a particular task/procedure that is defined inside the block.*/
//When we want it to do sth, we use CALL
console.log(`--------------FUNCTIONS-------------------------`)

function sayHello(bro, noob){
  console.log(`Hello my students, ${bro}`);
  console.log(`Welcome to my class, ${bro}`);
  var firstName = 'Dinos'; //var inside a function is not global
  console.log(`My name is ${firstName}, ${bro}`);
  console.log(`I am ${noob} years old dog, ${bro}`)
};//but var outside the function is global for all JS files attached to the HTML file
sayHello(' idiots!', 51);

function toCelsius (far){ //Farenheit to celsius
  return (far-32)*(5/9);
};
function toFarenheit (Cel){ // Celsius to Farenheit
  let tempCels = (Cel*9/5) + 32;
  console.log(`my temp in Farenheit is ${tempCels} degrees`)
};
  var nonSor =toCelsius(100);
  console.log(`my temp is Celsius is ${nonSor} degrees`);
  toFarenheit(37.78);

//so, one way to do function is to give var a name and out of function callTheFunction, like toFareneit
//the other way is to return the expression, and after, out of the function declare it to a var and CL the var
  