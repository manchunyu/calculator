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
}

const calculator = document.getElementById('calculator'),
        display = calculator.querySelector('#display'),
        ac = calculator.querySelector('#ac'),
        btns = [...calculator.querySelectorAll('button')];

let displayValue = '',
    operation = '',
    operated = false;

calculator.addEventListener('click', event => {
    
    const target = event.target;

    if (target.value) {
        if (display.textContent == 0 || operated === true) {
            display.textContent = target.value;
            operated = false;
        } else if (target.value === '.' && display.textContent.includes('.')){
            display.textContent = display.textContent;
        } else {
            display.textContent += target.value;
        }
    } else if (target.id === 'ac') {
        display.textContent = 0;
        operation = '';  
        displayValue = '';
    } else if (target.id === '+' || target.id === '-'||
                target.id === '*' || target.id === '/') {
                    // Not optimized
                    if (!operation) {
                        displayValue = +display.textContent;
                    } else {
                        display.textContent = operate(displayValue, operation, display.textContent);
                        displayValue = +display.textContent;
                    }
                    operation = target.id;
                    operated = true;
    } else if (target.id === '=') {
        if (operation) {
            display.textContent = operate(displayValue, operation, display.textContent);
            operation = '';
            operated = true;
        } else {
            display.textContent = display.textContent;
        }
    } else if (target.id === '+/-') {
        display.textContent = -`${display.textContent}`;
    } else if (target.id === '%') {
        display.textContent /= 100;
    }
});

document.addEventListener('keydown', event => {

    const clickEvent = new Event('click', {bubbles: true});

    for (const btn of btns) {
        if (btn.id === event.key) {
            btn.dispatchEvent(clickEvent);
            break;
        }
    }
}); 