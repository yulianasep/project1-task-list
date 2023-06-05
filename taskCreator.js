import { handleDeleteClick } from "./taskActions.js";
import { createButtonElement, appendElements } from "./utils.js";

export function createTaskElement(task, listEl) {
  const taskEl = document.createElement("div");
  taskEl.classList.add("task");

  const taskContentEl = createTaskContentElement(task);
  const taskActionsEl = createTaskActionsElement(taskEl, listEl);
  appendElements(taskEl, taskContentEl, taskActionsEl);
  listEl.appendChild(taskEl);
}

function createTaskContentElement(task) {
  const taskContentEl = document.createElement("div");
  taskContentEl.classList.add("content");

  const taskInputEl = createTaskInput(task);
  taskContentEl.appendChild(taskInputEl);

  return taskContentEl;
}

function createTaskInput(task) {
  const taskInputEl = document.createElement("input");
  taskInputEl.classList.add("text");
  taskInputEl.type = "text";
  taskInputEl.value = task;
  taskInputEl.setAttribute("readonly", "readonly");

  return taskInputEl;
}

function createTaskActionsElement(taskEl, listEl) {
  const taskActionsEl = document.createElement("div");
  taskActionsEl.classList.add("actions");

  const taskEditEl = createButtonElement("Edit", "edit", handleEditClick);
  const taskDeleteEl = createButtonElement(
    "Delete",
    "delete",
    handleDeleteClick.bind(null, taskEl, listEl)
  );
  taskActionsEl.append(taskEditEl, taskDeleteEl);

  function handleEditClick() {
    if (taskEditEl.innerText.toLowerCase() === "edit") {
      taskEl.querySelector("input").removeAttribute("readonly");
      taskEl.querySelector("input").focus();
      taskEditEl.innerText = "Save";
    } else {
      taskEl.querySelector("input").setAttribute("readonly", "readonly");
      taskEditEl.innerText = "Edit";
    }
  }

  return taskActionsEl;
}
