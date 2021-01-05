let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;

let $popup
let $popupInfo
let $editedToDo
let $popupInput
let $addPopupBtn
let $closeToDoBtn
let $idNumber = 0
let $allTasks

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

    $popup = document.querySelector('.popup')
    $popupInfo = document.querySelector('.popupInfo')
    $popupInput = document.querySelector('.popupInput')
    $addPopupBtn = document.querySelector('.accept')
    $closeToDoBtn = document.querySelector('.cancel')
    $allTasks = document.getElementsByTagName('li')
}
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask)
    $ulList.addEventListener('click', checkClick)
    $closeToDoBtn.addEventListener('click', closePopup)
    $addPopupBtn.addEventListener('click', changeToDo)
    $todoInput.addEventListener('keyup', enterCheck)

}

const addNewTask = () => {
    if ($todoInput.value !== '') {
        $idNumber++;
        $newTask = document.createElement('li')
        $newTask.innerText = $todoInput.value
        $ulList.appendChild($newTask)
        $newTask.setAttribute('id', `todo-${$idNumber}`)
        $todoInput.innerText = ""
        $alertInfo.innerText = ""

    } else {
        $alertInfo.innerText = 'Wpisz treść zadania'
    }



}

const enterCheck = () => {
    if (event.keycode === 13) {
        addNewTask()
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
        editTask(e);
    } else if (e.target.closest('button').className === 'delete') {
        console.log('delete')
        { deleteTask(e) }
    }


};
const editTask = (e) => {
    const oldToDo = e.target.closest('li').id
    $editedToDo = document.getElementById(oldToDo)
    $popupInput.value = $editedToDo.firstChild.textContent

    $popup.style.display = 'flex'
};
const changeToDo = () => {
    if ($popupInput.value !== ``) {
        $editedToDo.firstChild.textContent = $popupInput.value
        $popup.style.display = 'none'
        $popup.innerText = ""
    } else {
        $popupInfo.innerText = "musisz podac treść"
    }
}
const closePopup = () => {
    $popup.style.display = 'none'

};
const deleteTask = (e) => {
    const deleteToDo = e.target.closest(' li')
    deleteToDo.remove()

    if ($allTasks.length === 0) {
        $alertInfo.innerText = ' Brak zadań na liscie'
    }
}

document.addEventListener('DOMContentLoaded', main);











