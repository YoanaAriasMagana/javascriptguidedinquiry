//very hard
let firstNumber = prompt("Enter your first number here")
let operation = prompt("What would you like to do? (+, -, *, /)")
let secondNumber = prompt("Enter your second number")


firstNumber = parseFloat(firstNumber)
secondNumber = parseFloat(secondNumber)

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

if (operation == "+") {
    result = add(firstNumber, secondNumber)
    alert(`${firstNumber} + ${secondNumber} = ${result}`)
}
else if (operation == "-") {
    result = subtract(firstNumber, secondNumber)
    alert(`${firstNumber} - ${secondNumber} = ${result}`)
}
else if (operation == "*") {
    result = multiply(firstNumber, secondNumber)
    alert(`${firstNumber} * ${secondNumber} = ${result}`)
}
else {
    result = divide(firstNumber, secondNumber)
    alert(`${firstNumber} / ${secondNumber} = ${result}`)
}
