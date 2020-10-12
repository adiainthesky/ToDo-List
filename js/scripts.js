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

Contact.prototype.completed = function(status) {
  for (let i=0; i< this.tasks.length; i++) {
    if (this.tasks[i].status == "complete") {
      delete this.tasks[i];
      return true;
    }
  }
};
return false; 
}
