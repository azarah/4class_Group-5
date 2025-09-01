var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function(){
    $("calculate").onclick = calculateFV;
};

function calculateFV(){
    // 1. Get inputs
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseInt($("years").value);

    // 2. Validate inputs
    if (isNaN(investment) || isNaN(rate) || isNaN(years)) {
        alert("Please enter valid numbers.");
        return;
    }

    // 3. Yearly compounding
    var yearlyFV = investment * Math.pow(1 + (rate / 100), years);

    // 4. Monthly compounding
    var monthlyFV = investment * Math.pow(1 + (rate / 100) / 12, years * 12);

    // 5. Display results
    $("future_value_yearly").value = yearlyFV.toFixed(2);
    $("future_value_monthly").value = monthlyFV.toFixed(2);
}
