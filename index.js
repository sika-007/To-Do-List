//Variable Declaration

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask =  document.getElementById('input-task');

console.log(inputTask.value)
//Event  Listener for add button

addTask.addEventListener('click', function() {

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`; //This collects the value that has been typed into the inpur bar
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="far fa-check-circle"></i>`;
    checkButton.classList.add('check-task');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="far fa-trash-alt"></i>`;
    deleteButton.classList.add('delete-task');
    task.appendChild(deleteButton);

    if(!inputTask.value) {
        alert('Please Enter a Task')
    } else {
        taskContainer.appendChild(task)
        inputTask.value = ""
    }

    checkButton.addEventListener("click", function() {
        checkButton.parentElement.style.textDecoration = "line-through" //checkButton.parentElement = task
    })

    deleteButton.addEventListener("click", function(e) {
        e.target.parentElement.parentElement.remove()
    })
})