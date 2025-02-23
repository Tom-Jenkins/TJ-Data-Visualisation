"use strict";

// ---------- //
// BUTTON WIDGET
// ---------- //

// Get elements from DOM
const portfolioBtnContainer = document.querySelector(".portfolio__btn--container");
const portfolioBtns = document.querySelectorAll(".portfolio__btn");
const portfolioBtnAll = document.querySelector(".portfolio__btn--1");
const portfolioItems = document.querySelectorAll(".portfolio__item");

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

// ---------- //
// POPUPS
// ---------- //

// Add functinality to elements with popups on DOM content load
document.addEventListener("DOMContentLoaded", () => {
    const popupTriggers = document.querySelectorAll(".popup__trigger");
    const popupCloses = document.querySelectorAll(".popup__close");
    const popupClosesBtn = document.querySelectorAll(".popup__close--btn");

    // Open popup event listener
    popupTriggers.forEach(trigger => {
        trigger.addEventListener("click", function (e) {
            e.preventDefault();
            const targetPopup = document.getElementById(this.dataset.target);
            if (targetPopup) targetPopup.classList.add("popup--active");
        });
    });

    // Close popup on click of X (top-right)
    popupCloses.forEach(close => {
        close.addEventListener("click", function (e) {
            e.preventDefault();
            this.closest(".popup").classList.remove("popup--active");
        });
    });

    // Close popup on click of close button
    popupClosesBtn.forEach(close => {
        close.addEventListener("click", function (e) {
            e.preventDefault();
            this.closest(".popup").classList.remove("popup--active");
        });
    });
});
