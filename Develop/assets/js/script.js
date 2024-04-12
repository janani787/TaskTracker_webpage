// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const taskTitle = $('#Task-Title');
const description=$('#Description');
// Todo: create a function to generate a unique task id
function generateTaskId() {


}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
 console.log( JSON.parse(localStorage.getItem('task')));
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
  console.log(taskTitle);
const taskDetails=[];
const task =
{
  taskTitle:taskTitle.val(),
  taskDuedate:Date,
  taskDescription:description.val()
};
localStorage.setItem('task',JSON.stringify(task));
console.log(taskTitle.val());
}
// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
 
});

$('#add-task').on('click',handleAddTask);