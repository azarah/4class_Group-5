"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("#image_rollovers img");
  const preloaded = []; // keep references so they aren't GC'd

  for (const img of images) {
    const original = img.src;   // original image
    const rollover = img.id;    // rollover URL is stored in the id

    img.dataset.old = original;
    img.dataset.new = rollover;

    // Preload and retain reference
    const pre = new Image();
    pre.src = rollover;
    preloaded.push(pre);

    // Hover behavior
    img.addEventListener("mouseover", () => (img.src = img.dataset.new));
    img.addEventListener("mouseout",  () => (img.src = img.dataset.old));
  }

  // +1s: show rollover images
  setTimeout(() => {
    images.forEach(img => (img.src = img.dataset.new));
  }, 1000);

  // +2s: restore original images
  setTimeout(() => {
    images.forEach(img => (img.src = img.dataset.old));
  }, 2000);
});