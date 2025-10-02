"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

//CHANGES MADE:: functions to set/clear span error text/ replace using alert()
const setError = (spanSel, msg) => { $(spanSel).textContent = msg; };
const clearError = spansel => { $(spansel).textContent = ""; }


const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    //CHANGES MADE:: start by clearing mpg output each time
    $("#mpg").value = "";

    let isValid = true;

    //CHANGES MADE:: display errors in spans instaed of alerts()
    if (isNaN(miles) || miles <= 0) {
        setError("#miles_error", getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
        isValid = false;
    } else {
        //Clear Span if Valid
        clearError("#miles_error");
    }

    if (isNaN(gallons) || gallons <=0 ){
        setError("#gallons_error", getErrorMsg("Gallons of gas used"));
        if (isValid) focusAndSelect("#gallons"); 
        isValid = false;
    } else {
        //Clear Span if valid
        clearError("#gallons_error");
    }

    // CHANGES MADE:: if inputs valid, calculate MPG and clear errors
    if (isValid) {
        $("#mpg").value = calculateMPG(miles, gallons);
        clearError("#miles_error");
        clearError("#gallons_error");
    }
};

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";

    // CHANGES MADE:: reset spans to asterisks when clearing entries
    $("#miles_error").textContent = "*";
    $("#gallons_error").textContent = "*";
    $("#miles").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();
});