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
  // 1. create a new li tag

  const newTodoElement = document.createElement("li");
  // 2. set the text inside

  let titleTodo = document.createElement("h3");
  titleTodo.textContent = `${title}`;
  newTodoElement.appendChild(titleTodo);

  let descriptionTodo = document.createElement("p");
  descriptionTodo.textContent = `${description}`;
  newTodoElement.appendChild(descriptionTodo);

  // 3. get the ul element that has all the todo li elements
  const ulContainer = document.querySelector("#todo-container");

  // 4. append the new li tag to the ul
  ulContainer.appendChild(newTodoElement);
}

main();
