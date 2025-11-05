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
    const saveBtn = document.getElementById("save");

    const emailPattern = /^[\w.\-]+@[\w.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const zipPattern = /^\d{5}(-\d{4})?$/;
    const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;

    saveBtn.addEventListener("click", () => {
        // Clear all spans
        document.querySelectorAll("span").forEach(span => span.textContent = "");

        // Get values
        const email = emailField.value;
        const phone = phoneField.value;
        const zip = zipField.value;
        const dob = dobField.value;

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
