//Array - a special variable that can contain more than one value
//Each 'space', is an element and is ending with comma ,
//All the list items are inside square brackets
//Access elements referring the index number of it ex .[3] 
//Add item to the end of the Array use name.push('nameOfItem)
//Remove the last item of an array use name.pop();
//Sort of an array using name.sort() or name.reverse() for A-Z and Z-A
console.log(`--------------ARRAYS-------------------------`)

let cars = ['Lada Niva', 'Mazda RX-8', "VW Golf GTI", 'Porsche Panamera GTS'];
console.log(cars); //check the different way they appear on the console log
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]); //cause it doesnt exist yet

cars.push('Mercedes SLR600')// the push methods adds another item to our list of Arrays
console.log(cars);//so, in this print we ll see all four items
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]); // now it does exists

cars.pop(); // this one removes the last item of an Array
console.log(cars) // so this print will not show us the SKR600 Mercedes
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]); //undefined again


//for the next 3 prints, we can assing the actions to a var and then just print the var
console.log(cars.sort()) //sorts the items from A-Z
console.log(cars.reverse())//to use this, we must first sort the items
console.log(cars[cars.length-1])//printing the last item of th list (-1 cause the list
//   starts from 0)
//assining to a var looks like "let/var/... car = car.sort(); console.log(car);"