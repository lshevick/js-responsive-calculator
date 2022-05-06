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

    let i = 0;
    let currentNum = [];
    let prevNum = [];
    let calculation = [];
    let result = 0;
    let operator;


    pushNumber();
    pushOperator();

    $equals.onclick = function () {
        calculation.push(currentNum);
        calculation.flat();
        console.log(calculation.flat());
        let num1 = currentNum.join('');
        let num2 = prevNum.join('');
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
                operator = $operators[i].value;
                prevNum = currentNum;
                currentNum = [];
                console.log('changed Nums!');
                calculation.push(prevNum, $operators[i].value);
                console.log($operators[i].value, 'pushed to calc');
            }
        }
    };

    function pushNumber() {
        for (let i = 0; i < $numbers.length; i++) {
            $numbers[i].onclick = () => {
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

})();