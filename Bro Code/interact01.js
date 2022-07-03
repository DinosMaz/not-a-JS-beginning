/*var myName = prompt('What is your name?');
console.log('hello ',myName)*/ 
// this is an easy but an annoying way to inetract through .prompt

//DoM Document Object Model
document.getElementById('button').onclick = function(){
  let myName = document.getElementById('mytext').value;
  console.log(`Hello ${myName}`); 
}