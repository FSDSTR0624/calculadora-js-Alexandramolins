let calculadoraEncendida = false;

function encender() {
    calculadoraEncendida = !calculadoraEncendida;
    console.log(calculadoraEncendida);
    if(calculadoraEncendida === true){
        document.getElementById('displayInput').style.backgroundColor = '#fecdd0'
    } else {
        document.getElementById('displayInput').style.backgroundColor = 'rgba(239, 239, 239, 0.3)';
        this.clearAll();
    } 
};

function add(a, b) {
    return parseInt(a) + parseInt(b);
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function division(a, b) {
    return a / b;
};

function displayValue(value) {
    if (calculadoraEncendida === true) {
        document.getElementById('displayInput').value += value;
    } else {
        alert("La calculadora debe estar encendida");
    }
};

function clearAll() {
    document.getElementById('displayInput').value = "";
};

function deleteLast() {
    if(calculadoraEncendida === true){
    const screen = document.getElementById('displayInput');
    screen.value = screen.value.slice(0, -1) || "";
    } else {
        alert("La calculadora debe estar encendida")
    }
};

const percentage = (a, b) =>{
    if(a === 0 || b === 0){
        return 0;
    } if (!b){
        return a / 100;
    }
    return ( a * b) / 100;
};

function calcularResultado() {
    const screen = document.getElementById('displayInput');
    const value = screen.value;
    const operators = ['+', '-', '*', '/', '%'];
    let numbers = { a: 0, b: 0, operator: '' };
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        if (value.includes(operator)) {
            const splitedValue = value.split(operator);
            numbers.a = splitedValue[0];
            numbers.b = splitedValue[1];
            numbers.operator = operator;
        }
    };
    switch (numbers.operator) {
        case '+': screen.value = add(numbers.a, numbers.b);
            break;
        case '-': screen.value = substract(numbers.a, numbers.b);
            break;
        case '*': screen.value = multiply(numbers.a, numbers.b);
            break;
        case '/': screen.value = division(numbers.a, numbers.b);
            break;
            case '%': screen.value = percentage (numbers.a, numbers.b);
            break;
    }
};