const defaultResult = 0;
let result = defaultResult;

function add() {
    let currentResult = result;
    let desc = `${currentResult} + ${currentInputValue.value}`;
    result = result + parseInt(currentInputValue.value);
    // alert(`curr : ${currentResult} , res: ${result}`);
    outputResult(result, desc);
}
