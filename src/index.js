function main() {
  document
    .querySelector("#create-todo-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let title = document.querySelector("#todo-title-input").value;
      let description = document.querySelector("#todo-description-input").value;

      document.querySelector("#todo-title-input").value = "";
      document.querySelector("#todo-description-input").value = "";

      appendTodo(title, description);
    });
}

function displayTitleDescriptionInfo(response) {}

function appendTodo(title, description) {
  // create a new div, li, ul tag

  const titleContainer = document.createElement("div");

  let todoListContainer = document.querySelector("#todo-container"); //parent

  const newTodoElement = document.createElement("li"); //child

  // set the text inside

  const deleteButton = document.createElement("button");

  //delete li

  deleteButton.addEventListener("click", function () {
    todoListContainer.removeChild(newTodoElement);
  });

  let titleTodo = document.createElement("h3");
  titleTodo.textContent = `${title}`;
  titleContainer.appendChild(titleTodo);
  titleContainer.appendChild(deleteButton);
  newTodoElement.appendChild(titleContainer);

  let descriptionTodo = document.createElement("p");
  descriptionTodo.textContent = `${description}`;
  newTodoElement.appendChild(descriptionTodo);
  deleteButton.textContent = "delete";

  // 3. get the ul element that has all the todo li elements
  const ulContainer = document.querySelector("#todo-container");

  // 4. append the new li tag to the ul
  ulContainer.appendChild(newTodoElement);
}

main();
