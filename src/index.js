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

// select ul, create a new li, div and button tag
function appendTodo(title, description) {
  const todoListContainer = document.querySelector("#todo-container"); //parent
  const newTodoElement = document.createElement("li"); //child
  const titleContainer = document.createElement("div");
  const deleteButton = document.createElement("button");

  // remove contents inside li tag
  deleteButton.addEventListener("click", function () {
    todoListContainer.removeChild(newTodoElement);
  });

  // create a new h3 and p tag, select ul tag
  const titleTodo = document.createElement("h3");
  const descriptionTodo = document.createElement("p");
  const ulContainer = document.querySelector("#todo-container");

  // add content to h3 and p tag
  titleTodo.textContent = `${title}`;
  descriptionTodo.textContent = `${description}`;

  newTodoElement.appendChild(titleContainer); // append div tag to li
  titleContainer.appendChild(titleTodo); // append h3 tag to div
  titleContainer.appendChild(descriptionTodo); // append p tag to div
  titleContainer.appendChild(deleteButton); // append button tag to div

  // set text inside button
  deleteButton.textContent = "delete";

  // select ul element that has all the todo li elements

  // append the new li tag to the ul
  ulContainer.appendChild(newTodoElement);
}

main();
