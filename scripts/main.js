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
    let result = [12];
    let operator;
    
    
    pushNumber();
    pushOperator();
        
    $equals.onclick = function () {
        calculation.push(prevNum);
        calculation.flat();
        prevNum.join('');
        currentNum.join('');
        console.log(calculation.join(''));
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
                    if (!calculation.includes(currentNum, $operators[i].value))  {
                        currentNum = prevNum;
                        prevNum = [];
                        console.log('changed Nums!');
                        calculation.push(currentNum, $operators[i].value);
                        console.log($operators[i].value, 'pushed to calc');
                    } else {
                    }
                }
            }
        };
        
        function pushNumber() {
            for (let i = 0; i < $numbers.length; i++){
                $numbers[i].onclick = () => { 
                    prevNum.push($numbers[i].value);
                    $screen.value = prevNum.join('');
                    if (calculation.includes(currentNum)) {
                        $screen.value = 0;
                    };
            console.log(currentNum);
            console.log(prevNum);
        }
    }
    };

})();