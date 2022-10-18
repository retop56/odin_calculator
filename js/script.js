// Main operators

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function operate(operator, numOne, numTwo) {
  numOne = parseFloat(numOne, 10);
  numTwo = parseFloat(numTwo, 10);
  if (operator === "+") {
    // const answer = add(numOne, numTwo);
    // return checkAnswerLength(answer)
    return add(numOne, numTwo);
  } else if (operator === "-") {
    // const answer = subtract(numOne, numTwo);
    // return checkAnswerLength(answer)
    return subtract(numOne, numTwo);
  } else if (operator === "*") {
    // const answer = multiply(numOne, numTwo);
    // return checkAnswerLength(answer)
    return multiply(numOne, numTwo);
  } else {
    if (numTwo === 0) return alert("Cannot divide by zero!");
    // const answer = divide(numOne, numTwo);
    // return checkAnswerLength(answer)
    return divide(numOne, numTwo);
  }
}

// function checkAnswerLength(answer) {
//   // if the answer is longer than
//   if (Number.isInteger(answer) === false && )
// }

function handleDecimal() {
  if (secondOperand.includes(".")) {
    return;
  }
  addToDisplay(".");
}

function handleEquals() {
  if (firstOperand && operator && secondOperand) {
    oldDisplay.textContent = "";
    currentDisplay.textContent = operate(operator, firstOperand, secondOperand);
    clearOps();
  }
}

function clearOps() {
  firstOperand = "";
  secondOperand = "";
  operator = "";
}

function addToDisplay(num) {
  if (clearCurrentOnNextNumPress) {
    currentDisplay.textContent = "";
    secondOperand = "";
    toggleClearCurrentBoolean();
  }
  // currentDisplay.textContent += num;
  secondOperand += num;
  updateDisplay();
}

function updateDisplay() {
  currentDisplay.textContent = secondOperand;
}

function clearDisplay() {
  let cdText = currentDisplay.textContent;
  let oldText = oldDisplay.textContent;
  if (!oldText) {
    clearOps();
    currentDisplay.textContent = "";
  } else if (cdText) {
    currentDisplay.textContent = "";
  } else {
    oldDisplay.textContent = "";
    clearOps();
  }
}

function deleteLastChar() {
  if (secondOperand) {
    secondOperand = secondOperand.slice(0, -1);
    updateDisplay();
  }
}

function toggleClearCurrentBoolean() {
  clearCurrentOnNextNumPress = !clearCurrentOnNextNumPress;
}

function validateOperator(op) {
  if (currentDisplay.textContent === "") {
    return;
  } else if (operator === "") {
    firstOperand = currentDisplay.textContent;
    operator = op;
    secondOperand = "";
    toggleClearCurrentBoolean();
    oldDisplay.textContent = `${firstOperand} ${operator}`;
  } else if (op === "=") {
    secondOperand = currentDisplay.textContent;
    currentDisplay.textContent = operate(
      operator,
      firstOperand,
      secondOperand
    ).toString();
    oldDisplay.textContent = "";
    firstOperand = "";
    operator = "";
    toggleClearCurrentBoolean();
  } else {
    // secondOperand = currentDisplay.textContent;
    firstOperand = operate(operator, firstOperand, secondOperand);
    secondOperand = "";
    operator = op;
    // toggleClearCurrentBoolean();
    currentDisplay.textContent = "";
    oldDisplay.textContent = `${firstOperand} ${operator}`;
  }
}

// Creating variables for displays, operator, and operands

let clearCurrentOnNextNumPress = false;
let oldDisplayOperator = false;
const currentDisplay = document.querySelector(".current-display");
const oldDisplay = document.querySelector(".old-display");
let operator = "";
let firstOperand = "";
let secondOperand = "";

// Assigning buttonclick event listeners

document.querySelectorAll(".number").forEach((num) => {
  num.addEventListener("click", (event) =>
    addToDisplay(event.target.innerText)
  );
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearDisplay);

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", handleDecimal);

const deleteButton = document.querySelector("#del");
deleteButton.addEventListener("click", deleteLastChar);

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", handleEquals);

document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", (event) => {
    validateOperator(event.target.innerText);
  });
});
