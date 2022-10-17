// Main operators

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne + numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function operate(operator, numOne, numTwo) {
  if (operator === "+") {
    const answer = add(numOne, numTwo);
    return answer;
  } else if (operator === "-") {
    const answer = subtract(numOne, numTwo);
    return answer;
  } else if (operator === "x") {
    const answer = multiply(numOne, numTwo);
    return answer;
  } else {
    const answer = divide(numOne, numTwo);
    return answer;
  }
}

function addToDisplay(num) {
  currentDisplay.textContent += num;
}

function clearDisplay() {
  let cdText = currentDisplay.textContent;
  let oldText = oldDisplay.textContent;
  cdText ? (currentDisplay.textContent = "") : (oldDisplay.textContent = "");
}

function deleteLastChar() {
  currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
}

const currentDisplay = document.querySelector(".current-display");
const oldDisplay = document.querySelector(".old-display");
document.querySelectorAll(".number").forEach((num) => {
  num.addEventListener("click", (event) =>
    addToDisplay(event.target.innerText)
  );
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearDisplay);

const deleteButton = document.querySelector("#del");
deleteButton.addEventListener("click", deleteLastChar);
