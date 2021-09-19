//apend, create element
const taskContainer = document.querySelector("#task-container");
const addTodo = document.querySelector("#addButton");
const todoInput = document.querySelector("#todoInput");

const createEditAndDelete = (input, todoItem) => {
  const edit = document.createElement("button");
  edit.innerHTML = `<i class="far fa-edit fa-lg"></i>`;

  const del = document.createElement("button");
  del.innerHTML = `<i class="far fa-trash-alt fa-lg"></i>`;

  const ok = document.createElement("button");
  ok.innerHTML = `<i class="fas fa-check fa-lg"></i>`;

  ok.style.display = "none";

  edit.addEventListener("click", () => {
    input.disabled = false;
    input.classList.add("focused");
    ok.style.display = "block";
  });

  del.addEventListener("click", () => {
    taskContainer.removeChild(todoItem);
  });

  ok.addEventListener("click", function () {
    input.disabled = "true";
    this.style.display = "none";
    input.classList.remove("focused");
  });

  return [edit, del, ok];
};

const createListItem = () => {
  const todoItem = document.createElement("div");
  const todoItemInput = document.createElement("input");
  const [edit, del, ok] = createEditAndDelete(todoItemInput, todoItem);
  // todoItem.classList("todo-item");
  todoItem.classList.add("todo-item");
  todoItemInput.classList.add("todo-item-input");

  //give disabled input a value
  todoItemInput.value = todoInput.value;
  todoItemInput.disabled = true;

  todoItem.appendChild(todoItemInput);
  todoItem.appendChild(edit);
  todoItem.appendChild(ok);
  todoItem.appendChild(del);

  return todoItem;
};

const AppendListItem = () => {
  //check if the a value was inputted
  if (todoInput.value) {
    const todoItem = createListItem();
    taskContainer.appendChild(todoItem);
  }
};

addTodo.addEventListener("click", AppendListItem);
