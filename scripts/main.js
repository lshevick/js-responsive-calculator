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


    pushNumber();
    pushOperator();
    calculate();

    
    // $plusMinus.addEventListener('click', () => {
    //     console.log(`${$plusMinus.innerHTML}`);
    // })
    // $percent.addEventListener('click', () => {
    //     console.log(`${$percent.innerHTML}`);
    // })    

    function calculate(num1, operator, num2) {
        $equals.addEventListener('click', () => {
            
            for (i = 0; i < calculation.length; i++) {
                
            }
            console.log(calculation);

        })
    }
   
    function pushOperator() {
    $clear.addEventListener('click', () => {
        console.log(`${$clear.innerHTML}`);
    })

    for (let i = 0; i < $operators.length; i++){
        $operators[i].addEventListener('click', () => {
            calculation.push(` ${$operators[i].innerHTML} `);
            console.log(`${$operators[i].innerHTML}`);

        });
        }
    };
    
    function pushNumber() {
    for (let i = 0; i < $numbers.length; i++){
        $numbers[i].addEventListener('click', () => { 
            
            if (!calculation.includes(' + '||' - '||' * '||' / ')) {
                prevNum.push($numbers[i].innerHTML);
                if (!calculation.includes(prevNum)) {
                    calculation.push(prevNum);
                }
            } else {
                currentNum.push($numbers[i].innerHTML);
                if (!calculation.includes(currentNum)) {
                    calculation.push(currentNum);
                }
            }
            // console.log(`${$numbers[i].innerHTML}`);
            console.log(prevNum, currentNum);
            console.log(calculation);
        });
        }
    };

})();