// Let's make an array to store todo list items
let todoList = [];

// Let's make a function to create todo list object and assign to todoList array
function addTodo(text) {
    const todoTask = {
        id: Date.now(),
        text,
        ticked: false,
    };

    todoList.push(todoTask);

    // Let's check todoList array in the console
    console.log(todoList);

    // Let's show the added todoList
    showTodoList(todoTask);
}

// Show the todo lists which had been added from the HTML form
function showTodoList(todoTask) {
    const todoList = document.querySelector('.js-todolist');
    const isTicked = todoTask.ticked ? 'ticked' : '';
    const liNode = document.createElement('li');
    liNode.setAttribute('class', 'todo-task ${isTicked}');
    liNode.setAttribute('data-key', todoTask.id);
    liNode.innerHTML = `
        <input id="${todoTask.id}" type="checkbox"/>
        <label for="${todoTask.id}" class="ticklist js-ticklist"></label>
        <span>${todoTask.text}</span>
        <button class="delete-todo-task js-delete-todo-task">
            <i class="fa fa-close"></i>
        </button>
    `;
    todoList.append(liNode);
}

// Let's select the form element 
const todolistForm = document.querySelector('.todolist-form');

// Listen to the submit event
todolistForm.addEventListener('submit', event => {

    // Let's prevent the page to refresh after submitting the data from the form.
    event.preventDefault();

    // Let's get input data from the form
    const inputTodoListData = document.querySelector('.todolist-input');

    // Let's get the value from the input data
    const textData = inputTodoListData.value;

    // Let's check if there is text data and add to the todoList array.
    if (textData != '') {
        addTodo(textData);
    }
});