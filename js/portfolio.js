"use strict";

// ---------- //
// BUTTON WIDGET
// ---------- //

// Get elements from DOM
const portfolioBtnContainer = document.querySelector(".portfolio__btn--container");
const portfolioBtns = document.querySelectorAll(".portfolio__btn");
const portfolioBtnAll = document.querySelector(".portfolio__btn--1");

// When page loads by default highlight the "ALL" button
document.addEventListener("DOMContentLoaded", () => {
    portfolioBtnAll.classList.add("portfolio__btn--highlight");
});

// Highlight the button the user clicks and remove highlight from other button
portfolioBtnContainer.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("portfolio__btn")) {

        // remove highlight from all buttons
        portfolioBtns.forEach(btn => {
            btn.classList.remove("portfolio__btn--highlight");
        });

        // identify which button was clicked and add highlight
        const buttonClicked= `portfolio__btn--${e.target.dataset.id}`;
        const buttonClickElement = document.querySelector(`.${buttonClicked}`);
        buttonClickElement.classList.add("portfolio__btn--highlight")
    };
});

