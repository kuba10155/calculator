
let answer = 0
let num1 = 0
let num2 = 0
let span = document.getElementById("sum-el")

const addBtn = document.getElementById('add-btn')
const subBtn = document.getElementById('sub-btn')
const divBtn = document.getElementById('div-btn')
const mulBtn = document.getElementById('mul-btn')

addBtn.addEventListener('click', add)
subBtn.addEventListener('click', subtract)
divBtn.addEventListener('click', divide)
mulBtn.addEventListener('click', multiply)


function getNumbers() {
  num1 = Number(document.getElementById('num1-el').value)
  num2 = Number(document.getElementById('num2-el').value)
}

function add() {
  getNumbers()
  answer = num1 + num2
  span.textContent = "Answer: " + answer
}

function subtract() {
  getNumbers()
  answer = num1 - num2
  span.textContent = "Answer: " + answer
}

function divide() {
  getNumbers()
  answer = num1 / num2
  span.textContent = "Answer: " + answer
}

function multiply() {
  getNumbers()
  answer = num1 * num2
  span.textContent = "Answer: " + answer
}
