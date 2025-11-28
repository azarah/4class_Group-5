"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const tasks = [];

    const addTaskButton = document.getElementById("add_task");
    const clearTasksButton = document.getElementById("clear_tasks");
    const taskTextbox = document.getElementById("task");
    const taskListTextbox = document.getElementById("task_list");

    addTaskButton.addEventListener("click", () => {
        //const task = taskTextbox.value.trim();
       // if (task === "") {

            const taskEntry = taskTextbox.value.trim();
            if (taskEntry === "") {
            alert("Please enter a task.");
            taskTextbox.focus();
        } else {
            // Add task to array
            tasks.push(task);

            // ////Clear task text box and re-display tasks
           // taskTextbox.value = "";
           // taskListTextbox.value = tasks.join("\n");
            //taskTextbox.focus();

                // Add one or more tasks to array (split by newline)
                const newTasks = taskEntry.split('\n').map(t => t.trim()).filter(t => t !== "");
                for (const newTask of newTasks) {
                    tasks.push(newTask);
                }
        }
    });

    clearTasksButton.addEventListener("click", () => {
        tasks.length = 0;
        taskListTextbox.value = "";
        taskTextbox.focus();
    });

    taskTextbox.focus();
});
