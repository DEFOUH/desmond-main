const display = document.querySelector('.display');
const computeText = document.querySelector('.compute-text');
const buttons = Array.from(document.getElementsByClassName('input'));
const maxLength = 25;

let currentInput = '';
let previousInput = '';
let result = null;
let currentOperator = null;

function appendToDisplay(value) {
  if (currentInput.length < maxLength) {
    currentInput += value;
    display.textContent = currentInput;
    computeText.textContent = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  result = null;
  currentOperator = null;
  display.textContent = '';
  computeText.textContent = '';
}

function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput;
  computeText.textContent = currentInput;
}

function calculateResult() {
  const prevNum = parseFloat(previousInput);
  const currNum = parseFloat(currentInput);

  if (isNaN(prevNum) || isNaN(currNum)) return;

  switch (currentOperator) {
    case '+':
      result = prevNum + currNum;
      break;
    case '-':
      result = prevNum - currNum;
      break;
    case '*':
      result = prevNum * currNum;
      break;
    case '/':
      if (currNum === 0) {
        alert('Cannot divide by zero');
        return;
      }
      result = prevNum / currNum;
      break;
    default:
      return;
  }

  previousInput = result.toString();
  currentInput = '';
  currentOperator = null;
  display.textContent = result;
  computeText.textContent = previousInput + ' ' + currentOperator + ' ' + currentInput;
}

const functions = ['sin', 'cos', 'tan', 'ln', 'log', 'deg'];
const variables = ['x', 'y', 'z'];

buttons.forEach(button => {
  if (button.value === 'C') {
    button.addEventListener('click', clearDisplay);
  } else if (button.value === 'DEL') {
    button.addEventListener('click', deleteLastCharacter);
  } else if (button.value === '=') {
    button.addEventListener('click', calculateResult);
  } else if (functions.includes(button.value)) {
    button.addEventListener('click', () => appendToDisplay(button.value + '('));
  } else if (variables.includes(button.value)) {
    button.addEventListener('click', () => appendToDisplay(button.value));
  } else {
    button.addEventListener('click', () => appendToDisplay(button.value));
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    calculateResult();
  } else if (event.key === 'Backspace') {
    deleteLastCharacter();
  } else if (event.key === 'c' || event.key === 'C') {
    clearDisplay();
  } else {
    const key = event.key.replace(/[0-9.]/g, '').toLowerCase();
    if (functions.includes(key) || variables.includes(key)) {
      appendToDisplay(key);
    } else if (key === 'e') {
      appendToDisplay('Math.E');
    } else if (key === 'pi') {
      appendToDisplay('Math.PI');
    }
  }
});

const operators = ['+', '-', '*', '/'];
document.addEventListener('keydown', event => {
  if (operators.includes(event.key)) {
    currentOperator = event.key;
    previousInput = currentInput;
    currentInput = '';
    computeText.textContent = previousInput + ' ' + currentOperator;
  }
});
//////////////NEXT
const display = document.querySelector('.display');
const computeText = document.querySelector('.compute-text');
const buttons = Array.from(document.getElementsByClassName('input'));
const maxLength = 50;

let currentInput = '';
let previousInput = '';
let result = null;
let currentOperator = null;

function appendToDisplay(value) {
  if (currentInput.length < maxLength) {
    currentInput += value;
    display.textContent = currentInput;
    computeText.textContent = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  result = null;
  currentOperator = null;
  display.textContent = '';
  computeText.textContent = '';
}

function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput;
  computeText.textContent = currentInput;
}

function calculateResult() {
  const prevNum = parseFloat(previousInput);
  const currNum = parseFloat(currentInput);

  if (isNaN(prevNum) || isNaN(currNum)) return;

  switch (currentOperator) {
    case '+':
      result = prevNum + currNum;
      break;
    case '-':
      result = prevNum - currNum;
      break;
    case '*':
      result = prevNum * currNum;
      break;
    case '/':
      if (currNum === 0) {
        alert('Cannot divide by zero');
        return;
      }
      result = prevNum / currNum;
      break;
    default:
      return;
  }

  previousInput = result.toString();
  currentInput = '';
  currentOperator = null;
  display.textContent = result;
  computeText.textContent = previousInput + ' ' + currentOperator + ' ' + currentInput;
}

buttons.forEach(button => {
  if (button.value === 'C') {
    button.addEventListener('click', clearDisplay);
  } else if (button.value === 'DEL') {
    button.addEventListener('click', deleteLastCharacter);
  } else if (button.value === '=') {
    button.addEventListener('click', calculateResult);
  } else {
    button.addEventListener('click', () => appendToDisplay(button.value));
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    calculateResult();
  } else if (event.key === 'Backspace') {
    deleteLastCharacter();
  } else if (event.key === 'c' || event.key === 'C') {
    clearDisplay();
  } else {
    const key = event.key.replace(/[0-9.]/g, '').toLowerCase();
    if (key === 'e' || key === 'ln' || key === 'log' || key === 'sin' || key === 'cos' || key === 'tan' || key === 'deg') {
      return;
    }
    appendToDisplay(event.key);
  }
});

const operators = ['+', '-', '*', '/'];
document.addEventListener('keydown', event => {
  if (operators.includes(event.key)) {
    currentOperator = event.key;
    previousInput = currentInput;
    currentInput = '';
    computeText.textContent = previousInput + ' ' + currentOperator;
  }
});