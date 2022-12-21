
let num1 = 8
let num2 = 2
let answer = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let span = document.getElementById("sum-el")

function add() {
  answer = num1 + num2
  span.textContent = "Sum: " + answer
}

function subtract() {
  answer = num1 - num2
  span.textContent = "Sum: " + answer
}

function divide() {
  answer = num1 / num2
  span.textContent = "Sum: " + answer
}

function multiply() {
  answer = num1 * num2
  span.textContent = "Sum: " + answer
}
