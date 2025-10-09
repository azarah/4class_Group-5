"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    // Process each img tag
    for (let image of images) {
        const oldURL = image.src; // Store the original image source
        const newURL = image.id; // Store the rollover image source (from id attribute)

        // Preload Rollover Image - This ensures the rollover image is loaded in memory before it's displayed 
        const rolloverImage = new Image(); // Create a new Image source
        rolloverImage.src = newURL; // Assign the rollover image URL

        // Set up event handlers for hover effects
        image.addEventListener("mouseover", () => {
            image.src = newURL; // Change to rollover image when hovered
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL; // Restore original image when mouse leaves
        });

        // TIMER 01: Show rollover image 1 second after page load
        setTimeout(() => {
            image.src = newURL;
        }, 1000);

        // TIMER 02: Restore original image 2 seconds after page load
        setTimeout(() => {
            image.src = oldURL;
        }, 2000);
    }
});