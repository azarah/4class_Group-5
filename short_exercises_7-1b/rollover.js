"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    // process each img tag
    const preloadedImages = [];
    const originalURLs = [];
    const rolloverURLs = [];
    let imageIndex = 0;

    // preload all images
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;
        originalURLs.push(oldURL);
        rolloverURLs.push(newURL);
        // preload rollover image
        const preloadImg = new Image();
        preloadImg.src = newURL;
        preloadedImages.push(preloadImg);
        // set up event handlers for hovering an image
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });
        imageIndex++;
    }
    

    // Timer to swap all images to rollover 1 second after load
    setTimeout(() => {
        images.forEach((img, i) => {
            img.src = rolloverURLs[i];
        });
    }, 1000);

    // Timer to restore all original images 2 seconds after load
    setTimeout(() => {
        images.forEach((img, i) => {
            img.src = originalURLs[i];
        });
    }, 2000);
});