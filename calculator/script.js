let displayValue = '';

function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue !== '' && !isNaN(displayValue.slice(-1))) {
        displayValue += operator;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    if (displayValue !== '' && !isNaN(displayValue.slice(-1))) {
        try {
            let result = eval(displayValue);
            displayValue = result.toString();
            updateDisplay();
        } catch (error) {
            displayValue = 'Error';
            updateDisplay();
        }
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}