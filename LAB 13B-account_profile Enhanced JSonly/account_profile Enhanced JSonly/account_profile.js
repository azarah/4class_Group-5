"use strict";

const isDate = (date, datePattern) => {
    if (!datePattern.test(date)) return false;

    const dateParts = date.split("/");
    const month = parseInt(dateParts[0]);
    const day = parseInt(dateParts[1]);

    if (month < 1 || month > 12) return false;
    if (day > 31) return false;

    return true;
};

// Utility: get the <span> next to a given input
const getNextSpan = (input) => {
    let el = input.nextElementSibling;
    while (el && el.tagName !== "SPAN") {
        el = el.nextElementSibling;
    }
    return el;
};

document.addEventListener("DOMContentLoaded", () => {
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const zipField = document.getElementById("zip");
    const dobField = document.getElementById("dob");
    const cardField = document.getElementById("card"); // CHANGES MADE 11/4:: Validates the credit card field
    const expField = document.getElementById("cc_date");
    const saveBtn = document.getElementById("save");

    const emailPattern = /^[\w.\-]+@[\w.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const zipPattern = /^\d{5}(-\d{4})?$/;
    const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
    const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/; //CHANGES MADE 11/4:: A line of code that defines a regular expression pattern for a credit card number
    const expPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

    saveBtn.addEventListener("click", () => {
        // Clear all spans
        document.querySelectorAll("span").forEach(span => span.textContent = "");

        // Get values
        const email = emailField.value;
        const phone = phoneField.value;
        const zip = zipField.value;
        const dob = dobField.value;
        const expiration = expField.value;
        const card = cardField.value; // CHANGS MADE 11/4 :: A line of code that gets the value entered for the credit card. 

        let isValid = true;

        if (email === "" || !emailPattern.test(email)) {
            isValid = false;
            getNextSpan(emailField).textContent = "Please enter a valid email.";
        }

        if (phone === "" || !phonePattern.test(phone)) {
            isValid = false;
            getNextSpan(phoneField).textContent = "Please enter a phone number in NNN-NNN-NNNN format.";
        }

        if (zip === "" || !zipPattern.test(zip)) {
            isValid = false;
            getNextSpan(zipField).textContent = "Please enter a valid zip code.";
        }
    //CHANGS MADE 11/4 :: An if statement that checks whether the user entered something for the credit card. If there’s an entry,it uses the regular expression to make sure the credit card number is in the correct format
        if (card === "" || !cardPattern.test(card)) {
            isValid = false;
            getNextSpan(cardField).textContent = "Please enter a credit card number in NNNN-NNNN-NNNN-NNNN format.";
        }

        if (dob === "" || !isDate(dob, datePattern)) {
            isValid = false;
            getNextSpan(dobField).textContent = "Please enter a valid date in MM/DD/YYYY format.";
        }

        if (expiration === "" || !expPattern.test(expiration)) {
            isValid = false;
            getNextSpan(expField).textContent = "Please enter a valid expiration date in MM/YY format.";
        }

        

        if (isValid) {
            alert("Profile saved successfully!");
        }

    });
});