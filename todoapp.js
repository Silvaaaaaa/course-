let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Add Task
submit.onclick = function () {
    if (input.value !== "") {
      addTaskToArray(input.value); // Add Task To Array Of Tasks
      input.value = ""; // Empty Input Field
    }
  };

function addTaskToArray(taskText) {
    // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: true,
  };
  // Push Task To Array Of Tasks
  arrayOfTasks.push(task);
  console.log(arrayOfTasks)
}