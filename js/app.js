let output = document.calculator.output;
//Get Value
function getValue(val) {
    output.value += val;
}

//calculation

function calculation() {
  output.value = eval(output.value);
}
//PERCENTAGE calculator
function percentageCalculator() {
    if (output.value !='') {
     output.value = eval(output.value) / 100;
    } 
}

//Clear Entry
function clearEntry() {
    let userInput = output.value;
    let lastIndex = userInput.length - 1
    let slicedValue = userInput.slice(0, lastIndex)
    output.value = slicedValue;
}