target the buttons using DOM chap 5
addeventlisteners on all the buttons EVENT chap 6
do stuff?


 let numbers = document.querySelectorAll('#number')
 let 
 for (let i = 0; i < number.length; i++) {
     
     
 }

// log button data-value
function calculator() {
    // Make the buttons work
    let numbers = document.querySelectorAll(".number");
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        number.addEventListener('click', function () {
            let number = this.getAttribute('data-value');
            //displays numbers
            let calculatorscreen = document.getElementById('calculator-screen');
            calculatorscreen.innerText += number
        });
    }
}
calculator();



//operaters
function signs() {
    // Make the buttons work
    let opers = document.querySelectorAll(".operator");
    for (let i = 0; i < opers.length; i++) {
        let operator = opers[i];
        operator.addEventListener('click', function () {
            let operator = this.getAttribute('data-value');
            //display operator
            let calculatorscreen = document.getElementById('calculator-screen');
            calculatorscreen.innerText += operator
            
        });
    }
}
signs();






















