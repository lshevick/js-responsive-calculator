(function () {
    'use strict';

    const $calculator = document.querySelector('.calculator');
    const $screen = document.querySelector('.calculator-screen');
    const $numbers = document.querySelectorAll('.number');
    const $operators = document.querySelectorAll('.operator');
    const $clear = document.querySelector('.clear');
    const $plusMinus = document.querySelector('.plus-minus');
    const $percent = document.querySelector('.percent');
    const $equals = document.querySelector('.equal-sign');
    const $decimal = document.querySelector('.decimal');
    const $scientific = document.querySelectorAll('.science');

    let i = 0;
    let currentNum = [];
    let prevNum = [];
    let calculation = [];
    let result = 0;
    let operator;


    pushNumber();
    pushOperator();
    calculate();
    function calculate() {

        $equals.onclick = function () {
            let num1;
            let num2;
            calculation.push(currentNum);
            calculation.flat();
            console.log(calculation.flat());
            if (typeof currentNum !== "number") {
                num1 = currentNum.join('');
            } else {
                num1 = currentNum;
            }
            if (typeof prevNum !== 'number') {
                num2 = prevNum.join('');
            } else {
                num2 = prevNum;
            }

            switch (operator) {
                case '+':
                    result = parseFloat(num2) + parseFloat(num1);
                    break;
                case '-':
                    result = parseFloat(num2) - parseFloat(num1);
                    break;
                case '/':
                    result = parseFloat(num2) / parseFloat(num1);
                    break;
                case '*':
                    result = parseFloat(num2) * parseFloat(num1);
                    break;
                case '^':
                    result = parseFloat(num2) ** parseFloat(num1);
                default:
                    result = prevNum;
            }
            currentNum = [];
            currentNum.push(result);
            console.log(calculation);
            console.log(result);
            $screen.value = result;
            prevNum = [];
            calculation = [];
        }
    }


    function pushOperator() {

        $clear.onclick = () => {
            currentNum = [];
            prevNum = [];
            result = [];
            calculation = [];
            $screen.value = 0;
            console.clear();
            console.log('Clean slate');
        }


        for (let i = 0; i < $operators.length; i++) {
            $operators[i].onclick = () => {
                if (!calculation.includes($operators[i].value)) {
                    operator = $operators[i].value;
                    prevNum = currentNum;
                    currentNum = [];
                    console.log('changed Nums!');
                    calculation.push(prevNum, $operators[i].value);
                    console.log($operators[i].value, 'pushed to calc');
                } else {
                    calculate();
                };
            }
        }
    };

    function pushNumber() {
        for (let i = 0; i < $numbers.length; i++) {
            $numbers[i].onclick = () => {
                (result) ? result = 0 : null;
                currentNum.push($numbers[i].value);
                $screen.value = currentNum.join('');
                console.log(prevNum);
                console.log(currentNum);
            }
        }
    };

    $plusMinus.onclick = () => {
        if (!currentNum.includes('-')) {
            currentNum.unshift('-')
            $screen.value = currentNum.join('');
            console.log('negative!');
        } else {
            currentNum.shift('-');
            $screen.value = currentNum.join('');
            console.log('positive!');
            return;
        }
    };


    $decimal.onclick = () => {
        if (!currentNum.includes('.')) {
            currentNum.push('.');
            $screen.value = currentNum.join('');
        } else {
            return;
        }
    }

    $percent.onclick = () => {
        currentNum = parseFloat(currentNum) / 100;
        $screen.value = currentNum;
        currentNum = Array.from(String(currentNum));
        console.log(currentNum);
    }

    for (let i = 0; i < $scientific.length; i++) {
        $scientific[i].onclick = () => {
            if (currentNum) {
                switch ($scientific[i].value) {
                    case 'square':
                        $screen.value = (currentNum = Math.pow(currentNum, 2));
                        break;
                    case 'cube':
                        $screen.value = (currentNum = Math.pow(currentNum, 3));
                        break;
                    case 'square-root':
                        $screen.value = (currentNum = Math.sqrt(currentNum));
                        break;
                    case 'cube-root':
                        $screen.value = (currentNum = Math.cbrt(currentNum));
                        break;
                    case 'log':
                        $screen.value = (currentNum = Math.log(currentNum));
                        break;
                    case 'sin':
                        $screen.value = (currentNum = Math.sin(currentNum));
                        break;
                    case 'cos':
                        $screen.value = (currentNum = Math.cos(currentNum));
                        break;
                    case 'tan':
                        $screen.value = (currentNum = Math.tan(currentNum));
                        break;
                    case 'sinh':
                        $screen.value = (currentNum = Math.sinh(currentNum));
                        break;
                    case 'cosh':
                        $screen.value = (currentNum = Math.cosh(currentNum));
                        break;
                    case 'tanh':
                        $screen.value = (currentNum = Math.tanh(currentNum));
                        break;
                    case 'pi':
                        // $screen.value = 'π';
                        // currentNum.join(currentNum = ['3', '.', '141592653589793']);
                        $screen.value = (currentNum = Math.PI);
                        break;
                    case 'euler':
                        $screen.value = (currentNum = Math.E);
                        break;
                }
            }
        }
    }


    window.addEventListener('resize', () => {
        if (window.innerWidth > 500) {
            $decimal.classList.add('btn-lg');
            $equals.classList.add('btn-lg');
        } else {
            $decimal.classList.remove('btn-lg');
            $equals.classList.remove('btn-lg');
        }
    })

})();