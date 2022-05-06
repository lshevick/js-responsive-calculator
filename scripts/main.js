(function() {
    'use strict';

    const $calculator = document.querySelector('.calculator');
    const $screen = document.querySelector('.calculator-screen');
    const $numbers = document.querySelectorAll('.number');
    const $operators = document. querySelectorAll('.operator');
    const $clear = document.querySelector('.clear');
    const $plusMinus = document.querySelector('.plus-minus');
    const $percent = document.querySelector('.percent');
    const $equals = document.querySelector('.equal-sign');

    let i = 0;
    let prevNum = [];
    let currentNum = [];
    let calculation = [];
    let result = 0;
    let operator;
    
    
    pushNumber();
    pushOperator();
        
    $equals.onclick = function () {
        calculation.push(prevNum);
        calculation.flat();
        console.log(calculation.flat());
        let num1 = prevNum.join('');
        let num2 = currentNum.join('');
        switch (operator) {
            case '+':
                result = parseFloat(num2) + parseFloat(num1);
                prevNum = [];
                prevNum.push(result);
                break;
            case '-':
                result = parseFloat(num2) - parseFloat(num1);
                prevNum = [];
                prevNum.push(result);
                break;
            case '/':
                result = parseFloat(num2) / parseFloat(num1);
                prevNum = [];
                prevNum.push(result);
                break;
            case '*':
                result = parseFloat(num2) * parseFloat(num1);
                prevNum = [];
                prevNum.push(result);
                break;
            default: 
                result = currentNum;
            }
            console.log(calculation);
        console.log(result);
        $screen.value = result;
        currentNum = [];
        calculation = [];
    }

        function pushOperator() {
           
            $clear.onclick = () => {
                prevNum = [];
                currentNum = [];
                result = [];
                calculation = [];
                $screen.value = 0;
                console.clear();
                console.log('Clean slate');
            }


            for (let i = 0; i < $operators.length; i++) {
                $operators[i].onclick = () => {
                        operator = $operators[i].value;
                        currentNum = prevNum;
                        prevNum = [];
                        console.log('changed Nums!');
                        calculation.push(currentNum, $operators[i].value);
                        console.log($operators[i].value, 'pushed to calc');
                }
            }
        };
        
        function pushNumber() {
            for (let i = 0; i < $numbers.length; i++){
                $numbers[i].onclick = () => { 
                    prevNum.push($numbers[i].value);
                    $screen.value = prevNum.join('');
                    // if (result) {
                    //     result = 0;
                    //     $screen.value = 0;
                    // };
            console.log(currentNum);
            console.log(prevNum);
        }
    }
    };

})();