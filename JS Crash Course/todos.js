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