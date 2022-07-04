//object - a container for properties aand or methods
//properties - variables/ values
//methods - function the describe what object can do
console.log(`--------------OBJECTS-------------------------`)

var human1 = {
  name: 'DinosMaster999',
  age: 34000,

  eat: function() {
    console.log(`Dinos is eating food`)
  },
  drink: function(){
    console.log(`Dinos is drinking water`)
  },
  sleep: function(){
    console.log(`Dinos has passed out`);
  }
}; 
console.log(human1.name) //access through dot notatino
console.log(human1['age']) // access through bracket notation
human1.drink(); // call the function (the inner text), but if we use
console.log(human1.drink) //call the function, but with differents on the console log

var human2 = {
  name: 'AlexThe Great',
  age: 11000,

  eat: function() {
    console.log(`Alex is eating an apple`)
  },
  drink: function(){
    console.log(`Alex is drinking soda`)
  },
  sleep: function(){
    console.log(`Alex is sleeping`);
  }
}; 
console.log(human2.name) //access through dot notatino
console.log(human2['age']) // access through bracket notation