"use strict";

// get investment amount - loop until user enters a number
let investment = 0;
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) );

// get interest rate - loop until user enters a number
let rate = 0;
do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while ( isNaN(rate) );

// get number of years - loop until user enters a number
let years = 0;
do {
    years = parseInt(prompt("Enter number of years", 10));
}
while ( isNaN(years) );


// calculate future value with YEARLY compounding
let futureValueYearly = investment;
for (let i = 1; i <= years; i++ ) {
    futureValueYearly += futureValueYearly * rate / 100;
}

//--Added for loop for monthly equation---------------------------------------------
//calculate future value with monthly compounding
let futureValueMonthly = investment;
let months = years * 12;
let monthlyRate = rate / 100 /12;
for (let m = 1; m <= months; m++) {
    futureValueMonthly += futureValueMonthly * monthlyRate;
}

// display results
document.write('<p> <b>Future Value with Yearly Interest</b><p>');
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValueYearly.toFixed(2)}</p>`);

//-----Add monthly results-----------------------------------------------------------
// display monthly results
document.write('<p><b>Future Value with Monthly Interest</b></p>');
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValueMonthly.toFixed(2)}</p>`);
