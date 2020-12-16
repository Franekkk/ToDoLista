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

document.addEventListener('DOMContentLoaded', main)
