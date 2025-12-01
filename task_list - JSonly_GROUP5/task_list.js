"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const tasks = [];
  const addTaskButton = document.getElementById("add_task");
  const clearTasksButton = document.getElementById("clear_tasks");
  const taskTextbox = document.getElementById("task");
  const taskListTextbox = document.getElementById("task_list");

  addTaskButton.addEventListener("click", () => {
    const entry = taskTextbox.value.trim();

    if (entry === "") {
      alert("Please enter a task.");
      taskTextbox.focus();
    } else {

      // CHANGE MADE: split user entry into multiple tasks based on commas
      const newTasks = entry
        .split(",")            // ADDED: split on commas
        .map(t => t.trim())    // ADDED: trim each task
        .filter(t => t !== ""); // ADDED: remove empty results

      // CHANGE MADE: push each separated task individually
      newTasks.forEach(t => tasks.push(t));

      // unchanged behavior: clear textbox and refresh displayed list
      taskTextbox.value = "";
      taskListTextbox.value = tasks.join("\n");
      taskTextbox.focus();
    }
  });

  clearTasksButton.addEventListener("click", () => {
    tasks.length = 0;
    taskListTextbox.value = "";
    taskTextbox.focus();
  });

  taskTextbox.focus();
});

