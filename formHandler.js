export function handleFormSubmit(input, listEl, createTaskElement) {
  event.preventDefault();
  const task = input.value;

  if (!task) {
    alert("Please fill out the task");
    return;
  }

  createTaskElement(task, listEl);
  input.value = "";
}
