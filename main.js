import { handleFormSubmit } from "./formHandler.js";
import { createTaskElement } from "./taskCreator.js";

window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form");
  const input = document.getElementById("new-task-input");
  const listEl = document.getElementById("tasks");

  form.addEventListener(
    "submit",
    handleFormSubmit.bind(null, input, listEl, createTaskElement)
  );

  input.value = "";
});
