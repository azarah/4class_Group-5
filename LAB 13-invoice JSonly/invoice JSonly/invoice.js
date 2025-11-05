"use strict";

const calculateDiscount = (customer, subtotal) => {
    switch(customer) {
        case "reg":
            if (subtotal >= 100 && subtotal < 250) {
                return .1;
            } else if (subtotal >= 250 && subtotal < 500) {
                return  .25;
            } else if (subtotal >= 500) {
                return .3;
            } else {
                return 0;
            }
        case "loyal":
            return .3;
        case "honored":
            return (subtotal < 500) ? .4 : .5;
    }
};

const getFormattedDate = date => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateText = month + "/" + day + "/" + year;
    return dateText;    
}

document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculate");
    const typeSelect = document.getElementById("type");
    const subtotalInput = document.getElementById("subtotal");
    const percentInput = document.getElementById("percent");
    const discountInput = document.getElementById("discount");
    const totalInput = document.getElementById("total");

    calculateBtn.addEventListener("click", () => {
        const customerType = typeSelect.value;
        let subtotal = subtotalInput.value || 0;
        subtotal = parseFloat(subtotal);

        const discountPercent = calculateDiscount(customerType, subtotal);
        const discountAmount = subtotal * discountPercent;
        const invoiceTotal = subtotal - discountAmount;

        subtotalInput.value = subtotal.toFixed(2);
        percentInput.value = (discountPercent * 100).toFixed(2);
        discountInput.value = discountAmount.toFixed(2);
        totalInput.value = invoiceTotal.toFixed(2);

        // set focus on type drop-down when done
        typeSelect.focus();
    });

    // set focus on type drop-down on initial load
    typeSelect.focus();
});
