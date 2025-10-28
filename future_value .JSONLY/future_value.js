"use strict";

// Simple selector for convenience
function $(selector) {
    return document.querySelector(selector);
}

// Get the next sibling element (used to simulate jQuery's .next())
function nextElement(el) {
    let sibling = el.nextElementSibling;
    while (sibling && sibling.nodeType !== 1) {
        sibling = sibling.nextElementSibling;
    }
    return sibling;
}

//----- LAB 12-1.2  Acknowlegdment of getRandonNumber function source:-----
// Function to generate random number between 1 and max
const getRandomNumber = max => {
    let rand = null;
    if (!isNaN(max)) {
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;
    }
    return rand;
};

const calculateFutureValue = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;

//CHANGES MADE :: LAB 12-1.5  If statement that calculates future value >>  Alert statement that shows future value and i value in years >> i assigned years to end loop

        if (futureValue === Infinity || isNaN(futureValue)) {  
            alert("Future Value = Infinity\ni = " + i);  
            i = years;  
        }
    }
//CHANGES MADE :: LAB 12-1.6  Alert statement that shows maximum JavaScript number and commented out for 12-1.8

    //alert("Maximum JavaScript number = " + Number.MAX_VALUE); 
    
    return futureValue.toFixed(2);
};

// Replaces: $(document).ready(...)
document.addEventListener("DOMContentLoaded", () => {
    // Replaces: $("#calculate").click(...)
    $("#calculate").addEventListener("click", () => {
        const investmentInput = $("#investment");
        const rateInput = $("#rate");
        const yearsInput = $("#years");
        const futureValueInput = $("#future_value");

//CHANGES MADE :: LAB 12-1.7 Comment out user input to use random values instead
        //const investment = parseFloat(investmentInput.value);  
        //const rate = parseFloat(rateInput.value); 
        //const years = parseFloat(yearsInput.value);  

//CHANGES MADE :: LAB 12-1.7 Generate random values using getRandomNumber() function >> investment, rate, years variables assigned random max values
        const investment = getRandomNumber(50000); 
        const rate = getRandomNumber(15); 
        const years = getRandomNumber(50); 

//CHANGES MADE :: LAB 12-1.7  Displays random values in the text boxes
        investmentInput.value = investment;
        rateInput.value = rate;
        yearsInput.value = years;

        let isValid = true;

        if (isNaN(investment) || investment <= 0) {
            nextElement(investmentInput).textContent = "Must be a valid number greater than 0.";
            isValid = false;
        } else {
            nextElement(investmentInput).textContent = "";
        }

        if (isNaN(rate) || rate <= 0) {
            nextElement(rateInput).textContent = "Must be a valid number greater than 0.";
            isValid = false;
        } else {
            nextElement(rateInput).textContent = "";
        }

        if (isNaN(years) || years <= 0) {
            nextElement(yearsInput).textContent = "Must be a valid number greater than 0.";
            isValid = false;
        } else {
            nextElement(yearsInput).textContent = "";
        }

        if (isValid) {
            futureValueInput.value = calculateFutureValue(investment, rate, years);
        }

    });

    // Replaces: $("#investment").focus();
    $("#investment").focus();
});