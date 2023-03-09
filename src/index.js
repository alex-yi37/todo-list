function main() {
  let todoList = [];
  document
    .querySelector("#create-todo-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let title = document.querySelector("#todo-title-input").value;
      let description = document.querySelector("#todo-description-input").value;
      todoList.push({ title, description });
      document.querySelector("#todo-title-input").value = "";
      document.querySelector("#todo-description-input").value = "";
    });
}

function displayTitleDescriptionInfo(response) {
    
}

main()