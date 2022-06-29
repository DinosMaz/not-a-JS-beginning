//this is my first JavaScript code
console.log ('Hello, I am a programmer');

/* Δήλωση μεταβλητών στην JS γίνεται ως εξής:
α τρόπος*/ let firstName = 'Dinos', lastName = 'Maz' /* ή β τρόπος*/; let fisrtNames = 'Dino'; let lastNames='Mazs';
/*Άλλοι κανόνες¨
α. Δεν χρησμοποιούμε λέξεις που χρησιμοποιεί το πρόγραμμα, όπως let, if, else
β. Τα ονόματα πρέπει να έχουν κάποιο νόημα, για αργότερα όταν θέλουμε να κάνουμε αλλαγές ή να καταλάβουμε τον κώδικα
γ. Τα ονόματα δεν έχουν κενά ή -
δ. Υπάρχει διαφοροποίηση του ίδιου ονόματος αν είναι γραμμένος με μικρα ή κεφαλαία ή συνδιασμό, π.χ firstname ειναι διαφορετικό από το FirstName
ε. Δεν πρέπει να ξεκινάνε από αριθμό, π.χ. 1firstName. Θα εμφανίσει Error */
const mynumber='6995459816';
/*this is what we call OBJECT*/
let person={name:'Dinos', surname:'Maz', age:19};
console.log(person);
/*αν τώρα, θέλουμε να αλλάξουμε τις ιδιότητες ονοματος ή επιθετο ή ηλικία αργότερα στο πρόγραμμα, έχει δύο τρόπους*/
//τρόπος #1. Dot Notation
person.name='John Wick';
console.log(person);
//τρόπος #2. Bracket Notation
person['name']='Ironman'
console.log(person);
/* Παρατήρηση, έχω βάλει επίτηδες 3 φορές το console.log για να δείτε πως πρέπει να μπαίνει μόνο στο τέλος, διότι αλλιώς τυπώνει και τις τρεις αλλαγές και όχι την τελευταία*/
function greet (){
  console.log ('Hello')
}
greet();
function greets (namek){
  console.log ('Hello' + ' '+ namek);
}
greets('John');
function greetss (nameks, surnameks){
  console.log ('Hello '+nameks+' '+surnameks);
}
greetss('John', 'Wick');
alert('I love JavaScript');