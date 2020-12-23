let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;
const main = () => {
    prepreDOMElements()
    prepareDOMEvents()
}
const prepreDOMElements = () => {
    $todoInput = document.querySelector('.todoInput')
    $alertInfo = document.querySelector('.alertInfo')
    $addBtn = document.querySelector('.addBtn')
    $ulList = document.querySelector('.todoList ul')
    console.log($todoInput, $alertInfo, $addBtn, $ulList)
    console.log('jakies Text')
}
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask)
    $ulList.addEventListener('click', checkClick)
}

const addNewTask = () => {
    if ($todoInput.value !== '') {
        $newTask = document.createElement('li')
        $newTask.innerText = $todoInput.value
        $ulList.appendChild($newTask)

        $todoInput.innerText = ""
        $alertInfo.innerText = ""

    } else {
        $alertInfo.innerText = 'Wpisz treść zadania'
    }



}

const createTooIsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    $newTask.appendChild(toolsPanel)
    const completeBtn = document.createElement('button ')
    completeBtn.classList.add('complete')

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.innerText = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.appendChild(completeBtn)
    toolsPanel.appendChild(editBtn)
    toolsPanel.appendChild(deleteBtn)
}
const checkClick = (e) => {
    if (e.target.closest('button').classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.closest('button').classList.toggle('completed')
    } else if (e.target.closest('button').className === 'edit') {
        console.log('edit')
    } else if (e.target.closest('button').className === 'delete') {
        console.log('delete')
    }


};



document.addEventListener('DOMContentLoaded', main);











