# Todo list requirements

1. User can create a todo
   1. They click a button to be taken to a new page with a form
   2. User can fill out form with title, description
   3. User can submit form/add todo
2. User can delete a single todo by clicking an X or - (minus) button next to it
3. User can delete todos in bulk by selecting them
   1. User can select multiple todos
   2. User can click a button to delete all selected todos
4. User can complete a todo by checking a checkbox
   1. Should show some styling to indicate it is completed
5. User can uncomplete a todo by unchecking a checkbox
   1. Should remove the styling from completing the todo
6. User can edit a todo by clicking an edit button next to the todo
   1. User is navigated to a form
   2. Form is auto-filled with the todo title and description
   3. User can submit form/save changes
7. (Stretch goal) User can rearrange order of todos
   1. Think of UX later
8. (Stretch goal) play an animation when user completes a todo
9. Validation
   1. Can’t add a todo unless Title and Description are filled out
      1. Disable Add button until both are filled out?
      2. When user clicks Add button without filling out both fields, todo does not get added and we display some error message telling user to fix errors aka fill out entire form
   2. Delete button (for bulk deletes) is disabled until at least one todo is selected

## Pictures

- Rough [sketch of main page](https://github.com/alex-yi37/todo-list/pull/2#issuecomment-1455209973)
- Figma Draft [prototype] (https://www.figma.com/file/AtaXLmIsg2tJjRSEkQvnZj/Todo-List-App-Prototype?node-id=0%3A1&t=vpUNhxZwgJfFaCAQ-1)
