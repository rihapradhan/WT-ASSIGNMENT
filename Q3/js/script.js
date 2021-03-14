function add() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  document.getElementById('result').value = Number(num1) + Number(num2);
}

function subtract() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  document.getElementById('result').value = Number(num1) - Number(num2);
}

function divide() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  document.getElementById('result').value = `${num1}/${num2}: ${Number(num1) / Number(num2)} & ${num2}/${num1}: ${Number(num2) / Number(num1)}`;
}

function multiply() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  document.getElementById('result').value = Number(num1) * Number(num2);
}
