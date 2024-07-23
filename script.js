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
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

const calculator = document.getElementById('calculator'),
        display = calculator.querySelector('#display'),
        ac = calculator.querySelector('#ac');
        
let displayValue = '',
    operation = '';

calculator.addEventListener('click', event => {
    
    const target = event.target;

    if (target.value) {
        display.textContent += target.value;
    } else if (target.id === 'ac') {
        display.textContent = '';
        displayValue = '';  
    } else if (target.id === '+' || target.id === '-'||
                target.id === '*' || target.id === '/') {
                    displayValue = +display.textContent;
                    display.textContent = '';
                    operation = target.id;
    } else if (target.id === '=') {
        display.textContent = operate(displayValue, operation, display.textContent);
    }
})
