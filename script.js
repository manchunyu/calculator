function add(a, b){
    return +a + +b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, op, b){
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return subtract(a, b);
        case '/':
            return divide(a, b);
    }
}

const calculator = document.getElementById('calculator');
const display = calculator.querySelector('#display');
calculator.addEventListener('click', event => {
    const target = event.target;
    // correction
    display.textContent += event.target.value;
})