var number = "";
var newnum = "";
var operator = "";
var total = document.querySelector("#total");
total.textContent = "0";
//All the number keys
var buttons = document.querySelectorAll(".number");
//All the operators
var operators = document.querySelectorAll(".operator");
//Clear
var clear = document.getElementsByClassName("clear");
//Get equals
var equals = document.querySelector("#equals");

//Error handling for large numbers
var numberLength = function (number) {
    if(number.length > 9){
        total.textContent = (number.substr(number.length -9 ,9));
        if(number.length > 15){
            number = "";
            total.textContent = "Error";
        }
    }
};

//Loop through the numbers and assign clicked to number variable
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        number += this.textContent;
        total.textContent = number;
        numberLength(number);
    });
}

//Loop through operators and save clicked to operator variable
for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        operator = this.textContent;
        newnum = number;
        number = "";
        total.textContent = "0";
    });
}

//When equals is clicked, run operation on variables
equals.addEventListener('click', function () {
    if (operator === "+") {
        number = (parseInt(number, 10) + parseInt(newnum, 10)).toString(10);
    } else if (operator === "-") {
        number = (parseInt(newnum, 10) - parseInt(number, 10)).toString(10);
    } else if (operator === "÷") {
        number = (parseInt(newnum, 10) / parseInt(number, 10)).toString(10);
    } else if (operator === "×") {
        number = (parseInt(newnum, 10) * parseInt(number, 10)).toString(10);
    }
    total.textContent = number;
    numberLength(number);
    number = "";
    newnum = "";
});

//clear all variables
clear[0].addEventListener('click', function () {
    number = "";
    newnum = "";
    total.textContent = "0";
});
