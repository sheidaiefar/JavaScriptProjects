const defaultResult = 0;
let result = defaultResult;

function add() {
    let currentResult = result;
    let desc = `${currentResult} + ${currentInputValue.value}`;
    result += parseInt(currentInputValue.value);
    outputResult(result, desc);
}

function subtract() {
    let currentResult = result;
    let desc = `${currentResult} - ${currentInputValue.value}`;
    result -= parseInt(currentInputValue.value);
    outputResult(result, desc);
}

function multiply() {
    let currentResult = result;
    let desc = `${currentResult} * ${currentInputValue.value}`;
    result *= parseInt(currentInputValue.value);
    outputResult(result, desc);
}

function divide() {
    let currentResult = result;
    let desc = `${result} / ${currentInputValue.value}`;
    result /= parseInt(currentInputValue.value);
    outputResult(result, desc);
}
