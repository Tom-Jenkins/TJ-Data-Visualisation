"use strict";

// ---------- //
// BUTTON WIDGET
// ---------- //

// Get elements from DOM
const portfolioBtnContainer = document.querySelector(".portfolio__btn--container");
const portfolioBtns = document.querySelectorAll(".portfolio__btn");
const portfolioBtnAll = document.querySelector(".portfolio__btn--1");
const portfolioItems = document.querySelectorAll(".portfolio__item");

// When page loads by default highlight the "ALL" button
document.addEventListener("DOMContentLoaded", () => {
    portfolioBtnAll.classList.add("portfolio__btn--highlight");
});

// Highlight the button the user clicks and subset portfolio items
portfolioBtnContainer.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("portfolio__btn")) {

        // remove highlight class from all buttons
        portfolioBtns.forEach(btn => {
            btn.classList.remove("portfolio__btn--highlight");
        });

        // remove all portfolio items from DOM
        portfolioItems.forEach(item => item.classList.add("portfolio__item--hide"));

        // identify which button was clicked and add highlight class
        const buttonClicked = e.target.dataset.id;
        const buttonClickElement = document.querySelector(`.portfolio__btn--${buttonClicked}`);
        buttonClickElement.classList.add("portfolio__btn--highlight");

        // identify and display categories that belong to button clicked on DOM
        portfolioItems.forEach(item => {
            
            if (item.dataset.category.split(" ").includes(buttonClicked)) {
                item.classList.remove("portfolio__item--hide");
            };
        });
    };
});
