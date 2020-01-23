var operationButtons = document.getElementsByClassName("operation-button");

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function maceOperation(operationCode) {
  var number1 = Number(input1.value);
  var number2 = Number(input2.value);
  if (operationCode === "+") {
    var sum = number1 + number2;
  } else if (operationCode === "-") {
    var sum = number1 - number2;
  } else if (operationCode === "*") {
    var sum = number1 * number2;
  } else {
    var sum = number1 / number2;
  }
  window.alert(sum);
}

function onOperationButtonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var operation = clickedElement.innerHTML;
  maceOperation(operation);
}

var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];


// for (i = 0; i < operationButtons.length; i++){
//   var button = operationButtons[i];
//   button.addEventListener("click", onOperationButtonClick);
// }