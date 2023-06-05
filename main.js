window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form");
  const input = document.getElementById("new-task-input");
  const listEl = document.getElementById("tasks");

  form.addEventListener("submit", handleFormSubmit);

  /**
   * Handles the form submission event
   * @param {Event} event - The form submission event
   * @returns {void}
   */
  function handleFormSubmit(event) {
    event.preventDefault();
    const task = input.value;

    if (!task) {
      alert("Please fill out the task");
      return;
    }

    createTaskElement(task);
    input.value = "";
  }

  /**
   * Creates a new task element and appends it to the task list
   * @param {string} task - The task content
   * @returns {void}
   */
  function createTaskElement(task) {
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    const taskContentEl = createTaskContentElement(task);
    const taskActionsEl = createTaskActionsElement(taskEl);
    appendElements(taskEl, taskContentEl, taskActionsEl);
    listEl.appendChild(taskEl);
  }

  /**
   * Creates the content element for a task
   * @param {string} task - The task content
   * @returns {HTMLElement} - The task content element
   */
  function createTaskContentElement(task) {
    const taskContentEl = document.createElement("div");
    taskContentEl.classList.add("content");

    const taskInputEl = createTaskInput(task);
    taskContentEl.appendChild(taskInputEl);

    return taskContentEl;
  }

  /**
   * Creates the input element for a task
   * @param {string} task - The task content
   * @returns {HTMLInputElement} - The task input element
   */
  function createTaskInput(task) {
    const taskInputEl = document.createElement("input");
    taskInputEl.classList.add("text");
    taskInputEl.type = "text";
    taskInputEl.value = task;
    taskInputEl.setAttribute("readonly", "readonly");

    return taskInputEl;
  }

  /**
   *Creates the actions element for a task
   * @param {HTMLElement} taskEl - The task element
   * @returns {HTMLElement} - The task actions element
   */
  function createTaskActionsElement(taskEl) {
    const taskActionsEl = document.createElement("div");
    taskActionsEl.classList.add("actions");

    const taskEditEl = createButtonElement("Edit", "edit", handleEditClick);
    const taskDeleteEl = createButtonElement(
      "Delete",
      "delete",
      handleDeleteClick
    );
    taskActionsEl.append(taskEditEl, taskDeleteEl);

    /**
     * Handles the click event for the Edit button
     */
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

    /**
     * Handles the click event for the Delete button
     */
    function handleDeleteClick() {
      listEl.removeChild(taskEl);
    }

    return taskActionsEl;
  }

  /**
   * Creates a button element with the specified text, class name, and click handler
   * @param {string} text  - The text content of the button
   * @param {string} className - The name of the class that you want to add
   * @param {function} clickHandler - The click event handler function for the button
   * @returns {HTMLButtonElement} - The created button element
   */
  function createButtonElement(text, className, clickHandler) {
    const buttonEl = document.createElement("button");
    buttonEl.classList.add(className);
    buttonEl.innerText = text;
    buttonEl.addEventListener("click", clickHandler);

    return buttonEl;
  }

  /**
   * Appends multiple elements to a parent element
   * @param {HTMLElement} parentEl - The parent element to append the elements to
   * @param  {*} elements - The elements to append
   */
  function appendElements(parentEl, ...elements) {
    elements.forEach((el) => parentEl.appendChild(el));
  }
});
