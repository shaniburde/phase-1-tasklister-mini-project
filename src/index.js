document.addEventListener('DOMContentLoaded', () => {

// grab the form and then the new-task input feild
const taskForm = document.querySelector('form');
const newTaskInput = document.getElementById('new-task-description');

//grab the <ul> where the new tasks will be transferred to once submitted from the input feild
const newTaskUl = document.getElementById('tasks')

//add event listeners so that when subitted, the entered task moves to the ul
taskForm.addEventListener('submit', function(e) {
  //stops form from trying to submit automatically:
  e.preventDefault();
  const newTaskInput = document.getElementById('new-task-description');

  //create the li for the item to reside in on 'My To-Do List'
  const newTask = document.createElement('li');

  //create a button that will remove an item from the list when clicked
  const btn = document.createElement('button')
  btn.textContent = 'Task Completed!'
  btn.addEventListener('click', (e) => e.target.parentNode.remove())
  // grabs the user's input value and moves it to the li in the list
  newTask.innerText = newTaskInput.value + "  " + "   ";
  // adds the button as child of the li
  newTask.appendChild(btn); 
  
  appendNewTask(newTask)
  e.target.reset();

})
 const appendNewTask = task => {
   document.getElementById('tasks').appendChild(task);
 }

 

})