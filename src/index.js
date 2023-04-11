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

      if (title.value.length == "") {
        alert("Error, please input a value");
      }

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

  //create the description container
  const descriptionContainer = document.createElement("div");
  descriptionContainer.className = "todo-description";

  // create the footer container
  const footerContainer = document.createElement("div");
  footerContainer.className = "footer-row";

  // set text inside and add content to complete button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";

  // create a new p tag and add text content
  const descriptionTodo = document.createElement("p");
  // then change its text content
  descriptionTodo.textContent = `${description}`;

  // append description to descriptionContainer
  descriptionContainer.appendChild(descriptionTodo);

  // append complete Button to footerContainer
  footerContainer.appendChild(completeButton);

  // append title and delete button to titleContainer
  titleContainer.appendChild(titleTodo);
  titleContainer.appendChild(deleteButton);

  // append title and description to todoWrapper
  todoWrapper.appendChild(titleContainer);
  todoWrapper.appendChild(descriptionContainer);

  // append todoWrapper to li aka newTodoElement
  newTodoElement.appendChild(todoWrapper);

  // append newTodoElement to ul aka todoListContainer
  todoListContainer.appendChild(newTodoElement);

  // append description to todoWrapper
  todoWrapper.appendChild(descriptionContainer);
  todoWrapper.appendChild(footerContainer);

  // remove contents inside li tag
  deleteButton.addEventListener("click", function () {
    todoListContainer.removeChild(newTodoElement);
  });

  completeButton.addEventListener("click", function () {
    // how do we know if the todo has been completed by the time
    // someone clicks the "complete/uncomplete" button?

    // try to determine if descriptionTodoContainer has the "completed" class. If it does, that means the todo has
    // been completed
    // if it does NOT, then we know that the todo has not yet been completed
    let isTodoCompleted = false;

    const todoClasses = descriptionContainer.classList;

    for (let i = 0; i < todoClasses.length; i++) {
      const className = todoClasses[i];

      if (className === "completed") {
        isTodoCompleted = true;
        break;
      }
    }

    // if todo has not yet been completed and the user clicks the complete button, we want to add a strike through
    // to the title and description, and change button text to "Uncomplete"
    if (!isTodoCompleted) {
      descriptionContainer.classList.add("completed");
      titleTodo.classList.add("completed");
      completeButton.textContent = "Uncomplete";
    } else {
      // if todo HAS already been completed and the user clicks the uncomplete button, we want to remove the strike through
      // styling and also set the button text to be "Complete"
      descriptionContainer.classList.remove("completed");
      titleTodo.classList.remove("completed");
      completeButton.textContent = "Complete";
    }
  });
}

main();
