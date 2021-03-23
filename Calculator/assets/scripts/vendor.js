const currentInputValue = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationDescription = document.getElementById('current-calculation-description');

function outputResult(result, desc) {
  currentResultOutput.textContent = result;
  currentCalculationDescription.textContent = desc;
}
