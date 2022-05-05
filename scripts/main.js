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

    pushNumber();
    pushOperator();
    calculate();

    
    $plusMinus.addEventListener('click', () => {
        console.log(`${$plusMinus.value}`);
    })
    $percent.addEventListener('click', () => {
        console.log(`${$percent.value}`);
    })    

    function calculate() {
        $equals.addEventListener('click', () => {
            console.log(`${$equals.innerHTML}`);
        })
    }
   
    function pushOperator() {
    $clear.addEventListener('click', () => {
        console.log(`${$clear.innerHTML}`);
    })

    for (let i = 0; i < $operators.length; i++){
        $operators[i].addEventListener('click', () => {
            console.log(`${$operators[i].value}`);
        });
        }
    };
    
    function pushNumber() {
    for (let i = 0; i < $numbers.length; i++){
        $numbers[i].addEventListener('click', () => { 
            console.log(`${$numbers[i].value}`);
        });
        }
    };

})();