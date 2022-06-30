let nameex='John', surnameex = 'Wick', ageex=30;
console.log (`Hello, my name is ${nameex} ${surnameex} and I am ${ageex} years old`);
//this is another way to put text and variables togeither, thanks to ES6
const person = {
  firstName: 'Gianns',
  lastName: 'thegreat',
  age: 78,
  hobbies: ['music', 'movies', 'sports'],
  adress: {
    street: 'Monastiriou 50',
    city: 'Thessaloniki',
    state: 'Macedonia'
  }
}
console.log (person);
console.log (person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.adress.city)