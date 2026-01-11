document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.querySelector("#task-input");
  const addTaskBtn = document.querySelector("#add-task-btn");
  const todoList = document.querySelector("#task-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((t) => {
    renderTask(t);
  });

  addTaskBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();

    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      isComplete: false,
    };

    tasks.push(newTask);
    todoInput.value = "";
    console.log(tasks);
    renderTask(newTask);
    saveTaskToLocalStorage();
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.isComplete) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>
    `;
    todoList.appendChild(li);

    li.addEventListener("click", (evt) => {
      if (evt.target.tagName === "BUTTON") return;
      task.isComplete = !task.isComplete;
      li.classList.toggle("completed");
      saveTaskToLocalStorage();
    });

    li.querySelector("button").addEventListener("click", (evt) => {
      evt.stopPropagation();

      tasks = tasks.filter((t) => t.id != task.id);
      li.remove();
      saveTaskToLocalStorage();
    });
  }

  function saveTaskToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
