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
const ac = calculator.querySelector('#ac');
let displayValue = '';

calculator.addEventListener('click', event => {
    
    if (event.target.value) {
        display.textContent += event.target.value;
        displayValue = display.textContent;
    } else if (event.target.id === 'ac') {
        console.log(event.target);
        display.textContent = '';
        displayValue = '';
    }
})
