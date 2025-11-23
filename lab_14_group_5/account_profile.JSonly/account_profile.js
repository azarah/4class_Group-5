"use strict";

const isDate = (date, datePattern) => {
    if (!datePattern.test(date)) { return false; }

    const dateParts = date.split("/");
    const month = parseInt(dateParts[0]);
    const day = parseInt(dateParts[1]);

    if (month < 1 || month > 12) { return false; }
    else {
        switch(month) {
            case 2:
                if (day > 28) { return false; } // doesn't handle leap year
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (day > 30) { return false; }
                break;
            default:
                if (day > 31) { return false; }
                break;
        }
    }
    return true;
};

// Event listener for the "Save" button
document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("save");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const zipField = document.getElementById("zip");
    const dobField = document.getElementById("dob");
    const spans = document.querySelectorAll("span");

    saveButton.addEventListener("click", () => {
        spans.forEach(span => span.textContent = ""); // Clear any previous error messages
        
        // Get values entered by the user
        const email = emailField.value;
        const phone = phoneField.value;
        const zip = zipField.value;
        const dob = dobField.value;

        // Regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
        
        // Check user entries for validity
        let isValid = true;
        if (email === "" || !emailPattern.test(email)) {
            isValid = false;
            emailField.nextElementSibling.textContent = "Please enter a valid email.";
        }
        if (phone === "" || !phonePattern.test(phone)) {
            isValid = false;
            phoneField.nextElementSibling.textContent = "Please enter a phone number in NNN-NNN-NNNN format.";
        }
        if (zip === "" || !zipPattern.test(zip)) {
            isValid = false;
            zipField.nextElementSibling.textContent = "Please enter a valid zip code.";
        }
        if (dob === "" || !isDate(dob, datePattern)) {
            isValid = false;
            dobField.nextElementSibling.textContent = "Please enter a valid date in MM/DD/YYYY format.";
        }
        
        if (isValid) { 
            document.getElementById("profile_form").submit();
        }
        
        emailField.focus();
    });

    // Set focus on initial load
    emailField.focus();
});
