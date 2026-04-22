let display = document.getElementById('display');

function appendNumber(num) {
    if (display.value === '0' && num !== '.') {
        display.value = num;
    } else {
        display.value += num;
    }
}

function appendOperator(op) {
    if (display.value === '') return;
    if (['+', '-', '*', '/'].includes(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteLast() {
    display.value = display.value.slice(0, -1) || '0';
}