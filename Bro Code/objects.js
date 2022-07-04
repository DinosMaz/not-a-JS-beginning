//object - a container for properties aand or methods
//properties - variables/ values
//methods - function the describe what object can do

var human = {
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
console.log(human.name) //access through dot notatino
console.log(human['age']) // access through bracket notation
