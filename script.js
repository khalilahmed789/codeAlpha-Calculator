const display = document.querySelector("#display");
function writeValue(value) {
  display.value += value;
}

function eraseAll() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function percentage() {
  let expression = display.value;

  let operatorIndex = -1;
  for (let i = expression.length-1; i >= 0; i--) {
    if ("+-*/".includes(expression[i])) {
      operatorIndex = i;
      break;
    }    
  }
  if (operatorIndex === -1) {
    display.value = Number(expression) / 100;
    return;
  }
  let operator = expression[operatorIndex];
  let firstNumber = Number(expression.slice(0, operatorIndex));
  let secondNumber = Number(expression.slice(operatorIndex + 1));
  let percentageValue = firstNumber * secondNumber / 100;

  display.value = expression.slice(0, operatorIndex + 1) + percentageValue;
}

function calculate() {
  try {
    if (display.value === "") {
      return;
    }
    let result = eval(display.value);
    if (!Number.isFinite(result)) {
      display.value = "Error";
      return;
    }
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
