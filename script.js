let taskId = 0;

function addTask(event) {
  event.preventDefault();
  const input = document.getElementById("taskInput");
  const taskText = input.value;
  const task = document.createElement("div");
  task.className = "task";
  task.textContent = taskText;
  task.id = "task-" + taskId++;
  task.draggable = true;
  task.ondragstart = drag;
  document.getElementById("todo").appendChild(task);
  input.value = "";
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const task = document.getElementById(data);
  event.target.appendChild(task);
}
