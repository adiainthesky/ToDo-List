//Business logic for ToDo List
function ToDoList () {
  this.tasks = [];
}

ToDoList.prototype.addTask = function(task) {
  this.tasks.push(task);
}

//Business logic for tasks
function Task(action, location, status) {
  this.action = action;
  this.location = location;
  this.status = status;
}

ToDoList.prototype.completed = function(status) {
  for (let i=0; i< this.tasks.length; i++) {
    if (this.tasks[i].status == "complete") {
      delete this.tasks[i];
      return true;
    }
  };
return false; 
}


let toDoList1 = new ToDoList();
let task1 = new Task("finish patio", "outside", "incomplete");
let task2 = new Task("clean bathroom", "inside", "incomplete");

toDoList1.addTask(task1);
toDoList1.addTask(task2);

task1.status = "complete"; 

toDoList1.completed();

console.log(toDoList1.tasks);


