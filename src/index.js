function main() {
    const todoList = []

    setUpCreateForm(todoList)
}

function setUpCreateForm(todos) {
    // add "submit" event listener to the form
    const createForm = document.querySelector("#create-todo-form")

    createForm.addEventListener("submit", function(event) {
        event.preventDefault()

        const formData = new FormData(createForm)

        const todoObject = {}

        for (const formValue of formData.entries()) {
            if (formValue[0] === "title") {
                todoObject.title = formValue[1]
            }
            if (formValue[0] === "description") {
                todoObject.description = formValue[1]
            }
        }

        todos.push(todoObject)

        createForm.reset()
    })
}

main()