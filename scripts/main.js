(function() {
    'use strict';
    const $calculator = document.querySelector('.calculator');
    const $screen = document.querySelector('.calculator-screen');
    const $numbers = document.querySelectorAll('.number');
    const $operator = document. querySelector('.operator');
    let i = 0;
    
    for (let i = 0; i < $numbers.length; i++){
        $numbers[i].addEventListener('click', pushNumber);
        
        function pushNumber() {
            console.log(`${$numbers[i].value}`);
        }
    };

})();