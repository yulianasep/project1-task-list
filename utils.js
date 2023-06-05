export function createButtonElement(text, className, clickHandler) {
  const buttonEl = document.createElement("button");
  buttonEl.classList.add(className);
  buttonEl.innerText = text;
  buttonEl.addEventListener("click", clickHandler);

  return buttonEl;
}

export function appendElements(parentEl, ...elements) {
  elements.forEach((el) => parentEl.appendChild(el));
}
