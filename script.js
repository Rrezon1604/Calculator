function appendToDisplay(value) {
    var display = document.getElementById('result');
    var currentValue = display.value;

    if (['+', '-', '*', '/'].includes(value)) {
        if (['+', '-', '*', '/'].includes(currentValue[currentValue.length - 1])) {
            display.value = currentValue.slice(0, -1) + value;
        } else {
            display.value += value;
        };
    } else {
        if (currentValue === '0' && value !== '0') {
            display.value = value;
        } else {
            display.value += value;
        };
    };

    display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
    document.getElementById('result').value = '0';
}

function deleteLastChar() {
    var display = document.getElementById('result');
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    var display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = '0';
    }
}

function handleKeyboardInput(event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLastChar();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

window.onload = function() {
    document.addEventListener('keydown', handleKeyboardInput);
}