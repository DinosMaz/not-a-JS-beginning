const x=10;

if (x==10){
  console.log('x is ten')
}

if (x===10){
  console.log ('Alex is a noob')
}
//so, the defference between == and === is that the first checks the content but the second checks the type too
// lets check another example
const y=20;
if (y==10){ //this was changed like the previous line.
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

if (x===10 || y===20) { //so || is for 'OR' and && is for 'AND'. we all know what it means right? 
  console.log('X is 10 or Y is 20')
}
//lets check sth else
const ak=47; //so if ak=47, than Yes, else NO 9check the syntax of ? and  : and ;
const guns = ak==47? 'Yes':'No';
console.log(guns) //dont cl Ak but GUNS

//lets check Switch, it is like options, you ll see, easy logic
let myname ='JohnWick';
switch(myname) {
  case 'Dinos': console.log('My name is Dinos'); break;
  case 'Methos': console.log('My name is Methos'); break;
  case 'JackofBlades': alert('I am DEATH, I am JackofBlades'); break;
  default: console.log('My name is not Dinos or Methos, and you wont die'); break; 
}