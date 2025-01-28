"use strict";

// Function to calculate the scale factor needed to fill the viewport when hamburger button clicked
function updateScaleFactor() {
    // Get element from DOM
    const background = document.querySelector(".nav__mobile--background");

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get the element's size and position
    const rect = background.getBoundingClientRect();
    const elementWidth = rect.width;
    const elementHeight = rect.height;

    // Calculate the distance from the element's center to the farthest corner of the viewport
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    const farthestCornerX = Math.max(elementCenterX, viewportWidth - elementCenterX);
    const farthestCornerY = Math.max(elementCenterY, viewportHeight - elementCenterY);
    const maxDistanceToCorner = Math.sqrt(farthestCornerX ** 2 + farthestCornerY ** 2);

    // Calculate the required scale factor to cover the viewport diagonal
    const scaleFactor = maxDistanceToCorner / (Math.min(elementWidth, elementHeight) / 2);

    // Update CSS variable
    document.documentElement.style.setProperty("--scale-factor", scaleFactor);
}

// On window load
window.addEventListener("load", () => {
    // Update the scale factor
    updateScaleFactor();

    // Run hero image animation
    // document.querySelector(".hero__image").classList.add("hero__image--open");
});

// On window resize
window.addEventListener("resize", updateScaleFactor);

// Event listener to remove overflow scroll bar from body when navigation icon clicked
const navCheckbox = document.querySelector(".nav__mobile--checkbox");
navCheckbox.addEventListener("change", () => {
    if (navCheckbox.checked) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";
        // document.querySelector(".navigation__nav").style.transition = "none";
    };
});


// ---------- //
// UTILITY FUNCTIONS 
// ---------- //

// Import functions from module
// import { preventHoverAnimation } from "./utility";


var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);