//apend, create element
const taskContainer = document.querySelector("#task-container");
const addTodo = document.querySelector("#addButton");
const todoInput = document.querySelector("#todoInput");

const completeTodo = (item) => {
  item.setAttribute("data-todo-item", "completed");
};

const addListItem = () => {
  const inputValue = todoInput.value;
  //check if the a value was inputted
  if (inputValue) {
    const listIem = document.createElement("li");
    listIem.setAttribute("data-todo-item", "");
    listIem.innerText = todoInput.value;
    taskContainer.appendChild(listIem);

    listIem.addEventListener("click", () => completeTodo(listIem));
  }
};

addTodo.addEventListener("click", addListItem);
