"use strict";

// Function to calculate the scale factor needed to fill the viewport when hamburger button clicked
const updateScaleFactor = function () {
    const background = document.querySelector(".nav__mobile--background");
    const rect = background.getBoundingClientRect();
    const diameter = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
    const scaleFactor = diameter / rect.width;
    // const scaleFactor = 45

    // Update CSS variable
    document.documentElement.style.setProperty("--scale-factor", scaleFactor * 2);
}

// Update the scale factor on load and resize
window.addEventListener("load", updateScaleFactor);
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

// Prevent hover animation from happening after user clicks a navbar link


