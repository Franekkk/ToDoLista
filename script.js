let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
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

document.addEventListener('DOMContentLoaded', main)
