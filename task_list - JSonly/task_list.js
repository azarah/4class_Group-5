"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const tasks = [];

    const addTaskButton = document.getElementById("add_task");
    const clearTasksButton = document.getElementById("clear_tasks");
    const taskTextbox = document.getElementById("task");
    const taskListTextbox = document.getElementById("task_list");

    addTaskButton.addEventListener("click", () => {
        const task = taskTextbox.value.trim();
        if (task === "") {
            alert("Please enter a task.");
            taskTextbox.focus();
        } else {
            // Add task to array
            tasks.push(task);
            

            // Clear task text box and re-display tasks
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
