// Helper function: quick shortcut for document.getElementById
var $ = function (id) {
    return document.getElementById(id);
};

// This runs when the page has fully loaded
window.onload = function(){
    $("calculate").onclick = calculateFV;
};

// Main function that calculates the future values
function calculateFV(){
     // Get the investment amount entered by the user
    var investment = parseFloat($("investment").value);
     // Get the annual interest rate entered by the user
    var rate = parseFloat($("rate").value);
    // Get the number of years entered by the user
    var years = parseInt($("years").value);

    // Check if any inputs are not valid numbers
    if (isNaN(investment) || isNaN(rate) || isNaN(years)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate future value with yearly compounding
    // Formula: FV = PV * (1 + r/100)^t
    var yearlyFV = investment * Math.pow(1 + (rate / 100), years);

    // Calculate future value with monthly compounding
    // Formula: FV = PV * (1 + r/100/12)^(12*t)
    var monthlyFV = investment * Math.pow(1 + (rate / 100) / 12, years * 12);

    // Show the yearly future value in the textbox, rounded to 2 decimals
    $("future_value_yearly").value = yearlyFV.toFixed(2);
    // Show the monthly future value in the textbox, rounded to 2 decimals
    $("future_value_monthly").value = monthlyFV.toFixed(2);
}
