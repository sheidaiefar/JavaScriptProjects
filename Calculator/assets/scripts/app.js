let currentResult = 0;
let result = 0;

function add() {
    currentResult = result;
    result = result + parseInt(currentInputValue.value);
    // alert(`curr : ${currentResult} , res: ${result}`);
    outputResult(result, ` ${currentResult} + ${currentInputValue.value}`);
}
