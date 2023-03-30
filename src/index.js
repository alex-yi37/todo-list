// select form and label w/o webpage refreshing, returning their input values to be inserted
function main(response) {
  document
    .querySelector("#create-todo-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const title = document.querySelector("#todo-title-input").value;
      const description = document.querySelector(
        "#todo-description-input"
      ).value;

      document.querySelector("#todo-title-input").value = "";
      document.querySelector("#todo-description-input").value = "";

      appendTodo(title, description);
    });
}

// functionality to delete a todo referenced from this Stack Overflow thread:
// https://stackoverflow.com/a/69658354
// select ul, create a new li, div and button tag
function appendTodo(title, description) {
  const todoListContainer = document.querySelector("#todo-container"); //parent

  // li
  const newTodoElement = document.createElement("li"); //child

  // outer div contains everything
  const todoWrapper = document.createElement("div");
  todoWrapper.className = "todo-item";

  // nested div to todoWrapper, contains title and delete button
  const titleContainer = document.createElement("div");
  titleContainer.className = "todo-header";

  // create a new h3 and button tag, select ul tag
  const titleTodo = document.createElement("h3");
  // set the text content for the title
  titleTodo.textContent = title;

  const deleteButton = document.createElement("button");
  // set text inside delete button
  deleteButton.textContent = "Delete";

  // create the footer container
  const footerContainer = document.createElement("div");

  // set text inside complete button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";

  //create the description container
  const descriptionContainer = document.createElement("div");

  // append selectButton to footerContainer
  footerContainer.appendChild(completeButton);
  footerContainer.className = "footer-row";

  // append title and delete button to titleContainer
  titleContainer.appendChild(titleTodo);
  titleContainer.appendChild(deleteButton);

  // append titleContainer to todoWrapper
  todoWrapper.appendChild(titleContainer);

  // append todoWrapper to li aka newTodoElement
  newTodoElement.appendChild(todoWrapper);

  // append newTodoElement to ul aka todoListContainer
  todoListContainer.appendChild(newTodoElement);

  // create description for todo
  const descriptionTodo = document.createElement("p");
  // then change its text content
  descriptionTodo.textContent = `${description}`;

  // append description to todoWrapper
  todoWrapper.appendChild(descriptionTodo);
  todoWrapper.appendChild(footerContainer);

  // remove contents inside li tag
  deleteButton.addEventListener("click", function () {
    todoListContainer.removeChild(newTodoElement);
  });
}

main();
