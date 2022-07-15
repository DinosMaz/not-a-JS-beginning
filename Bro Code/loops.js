// While loop that repeats some code while the loop's condition remains true
console.log(`-----------------LOOPS-------------------------`)


//var creditNum = window.prompt("YOUR COMPUTER GOT VIYUS! ENTER YOUR CREDIT CARD OR DIE. . . . .")

// let one of thes two work

//--------------------------------------------------------------------------------------------

/*     while (creditNum == ""){
  creditNum = window.prompt("YOUR COMPUTER GOT VIRUS! ENTER YOUR...")
}
console.log ('Thank you your computer no longer has a virus')     */

//---------------------------------------------------------------------------------------------

/*do {creditNum = window.prompt("YOUR COMPUTER GOT VIRUS! ENTER YOUR...")
} while (creditNum=="");
console.log('Thank you your computer no longer has a virus')     */

console.log(`----------------FOR LOOPS------------------------`)
// for loop that repeats a limites amount of times for:
// declare index, to track how many times sth happends
// condiotion, to know where to stop
// step, what to do next

for (let i=10; i>0; i--){//as long as i>0, do the {} and next do i--
  console.log(i)
}

// || OR
o=0;
for (; o<=10;){
  console.log ("we count to", o)
  o++
} console.log (`HAPPY BIRTHDAY`);

console.log(`----------------FOR IN LOOPS------------------------`)
let letters = ['H','E','L','P']; 
for (q=0; q<letters.length; q++){ //a traditional way to show all letters
  console.log(letters[q])
}
for (let w in letters){//less syntax, less flexibility. FOR IN
  console.log (letters[w])
}

let car = { // the same but with object this time
  make: "Chevy",
  model: "Corvette",
  year: 2020,
  color: "black"
}
for (let property in car){
  console.log(car[property])
}

console.log(`----------------NESTED LOOPS------------------------`)
var symbol = prompt(`enter a symbol to use`)
var rows = prompt(`enter # of raws to use`)
var columns = prompt(`enter # of columns to use`)

for (let m=0; m<rows; m++){
  for (let n=0; n<columns; n++) {
    document.getElementById("premader").innerHTML += symbol
  };document.getElementById("premader").innerHTML += "<br>"
} //easy game, easy life
