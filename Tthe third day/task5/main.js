let expression = "";

function EnterNumber(value) {
  expression += value;
  document.getElementById("Answer").value = expression;
}

function EnterOperator(value) {
  expression += value;
  document.getElementById("Answer").value = expression;
}

function EnterEqual() {
  document.getElementById("Answer").value = eval(expression);
  expression = "";
}

function EnterClear() {
  expression = "";
  document.getElementById("Answer").value = "";
}
