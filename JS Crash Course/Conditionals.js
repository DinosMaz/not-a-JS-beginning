const x=10;

if (x==10){
  console.log('x is ten')
}

if (x===10){
  console.log ('Alex is a noob')
}
//so, the defference between == and === is that the first checks the content but the second checks the type too
// lets check another example
const y='20';
if (y===20){
  alert('noob') //and this didnt work, but if y==20, than it does work cause type string<>number
}
if (y===10){
  console.log('hello')
} else {
  console.log('not hello')
} // this is an IF with an ELSE inside, and we can put more ELSE inside the same if, and more IFs too
const z=40;
if (z===10){
  console.log('Z is 10')
} else if(z<10){ //this is how we put ore ELSE to an IF
  console.log('Z is less than 10')
} else {
  console.log('Z is more than 10')
};