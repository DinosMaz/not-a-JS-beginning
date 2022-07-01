//so lets see some selectors. First is Single Document
//and cause it is single, if there are more H1, it gets 
//only the first one
document.getElementById('my-form');
document.querySelector('h1');

//Multiple elements
console.log(document.querySelectorAll('.item')) //or
document.getElementsByClassName('item')//so CL was just for printing
//getElbyCL doesnt need . cause it is class by default