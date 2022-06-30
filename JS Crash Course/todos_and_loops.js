const todos =[
  {
    id:1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id:2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id:3,
    text: 'Dentist app',
    isCompleted: false
  },
];
console.log(todos);
console.log(todos[1].text);
//Jason is the format that the app communicates with server, so we do the following 
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


//loops
//for i=0, as long as i<10, i=i+1  ENTER  print i
//if we put console.log out of the loop it will become ERROR cause it doesnt know what is i!!!
for (let i=0; i<=10; i++) {
  console.log(`For Loop Number: ${i}`); //using the new printing format with ` insteed of '
}

//while(so i=0 and while i<10, do print i, and next i is i=i+1) easy game, easy life
let i=0;
while(i<10){
  console.log(`While Loop Number: ${i}`);
  i++;
}
//for when it is about arrays, less usable
for(let todo of todos){
  console.log(todo.id, todo.text);
}
//for each todos use function todo and print TODO of TODO.text 
todos.forEach(function(todo){
  console.log(todo)
});
//Map, didnt get it well this time, still needed somewhere
const todoText = todos.map(function(todo){
  return todo.text;
}); 
console.log(todoText);

//filter is when we filter the results of an Array like isCompleted=true
const todoCompleted =todos.filter(function(todo){
  return todo.isCompleted === true;
}
);
console.log(todoCompleted);
// as you see, we use console.log outside the loop and only in first example it is inside