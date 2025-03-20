"use strict";

// ---------- //
// CONTACT LEAFLET MAP
// ---------- //

// Intitalise map and add tiles
const coords = [50.734135114897754, -3.533123160443835];
const zoom = 4;
const map = L.map("map").setView(coords, zoom);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    crs: L.CRS.EPSG3857,
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add marker
const marker = L.marker(coords).addTo(map);

// Adding event listener to zoom in when marker is clicked
marker.on("click", function() {
  map.setZoom(11);
  map.panTo(marker.getLatLng());  // centre map on the marker
});

// Add a custom reset control button to the top-left corner of the map
const resetView = L.Control.extend({
    options: {
      position: "topleft",
    },
    onAdd: function() {
      const divContainer = L.DomUtil.create("div", "leaflet-control leaflet-bar");
      divContainer.setAttribute("id", "btn-reset-view");
      divContainer.setAttribute("style", "cursor: pointer;");
  
      divContainer.insertAdjacentHTML("afterbegin", `
        <a title="Reset view">
          <svg style="margin-top: 5px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>
        </a>
      
      `);
      document.getElementById("map").style.outlineStyle = "none";
      return divContainer;
    }
});
map.addControl(new resetView());

// Reset view to default view when button is clicked
document.getElementById("btn-reset-view").addEventListener("click", () => {
  map.setView(coords, zoom);
});

// Add scalebar to the bottom-left corner of the map
L.control.scale({imperial: false}).addTo(map);


// ---------- //
// PROJECT ACCORDION
// ---------- //

// Get elements from DOM
const accordionLinks = document.querySelectorAll(".project__box > h3");

// Open or close accordion when arrow is clicked
accordionLinks.forEach(link => {
    link.addEventListener("click", function () {

        const accordionID = document.getElementById(`accordion--${link.dataset.target}`);
        const plusIcon = document.querySelector(`h3[data-target=${link.dataset.target}] .accordion__plus`);
        const minusIcon = document.querySelector(`h3[data-target=${link.dataset.target}] .accordion__minus`);

        accordionID.classList.toggle("accordion--open");
        link.classList.toggle("accordion--open");
        plusIcon.classList.toggle("accordion__plus--hidden");
        minusIcon.classList.toggle("accordion__minus--show");
    });
});


// ---------- //
// TESTIMONIALS CAROUSEL
// ---------- //

// Get elements from DOM
const carouselContainer = document.querySelector(".carousel__container");
const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const items = document.querySelectorAll(".carousel__item");

// Declare variables
let currentIndex = 3 // Middle item of carousel
let currentTranslate = 0; // Track current position of carousel translateX
const itemWidth = 35; // Width of each carousel item in rem
const gap = 5; // Gap between item in rem
const translateAmount = itemWidth + gap; // Total width to translate
const translateMin = -(translateAmount * currentIndex); // Translate representing first item
const translateMax = (translateAmount * currentIndex); // Translate representing last item

// Function to clone a carousel item and append it to the end of the carousel
// const cloneItemEnd = function (node) {
//   const clone = node.cloneNode(true);
//   carousel.appendChild(clone);
//   node.remove();
// };

// Function to clone a carousel item and append it to the start of the carousel
// const cloneItemStart = function (node, firstChild) {
//   const clone = node.cloneNode(true);
//   carousel.insertBefore(clone, firstChild);
//   node.remove();
// };

// Function to move the carousel one item to the right
const moveCarouselRight = function () {
  if (currentIndex < items.length-1) {
    currentTranslate -= translateAmount;
    carousel.style.transform = `translateX(${currentTranslate}rem)`;
    currentIndex += 1;
    // Move carousel back to beginning
  } else {
    currentTranslate = translateMax;
    carousel.style.transform = `translateX(${currentTranslate}rem)`;
    currentIndex = 0;
  };
};

// Function to move the carousel one item to the left
const moveCarouselLeft = function () {
  if (currentIndex > 0) {
    currentTranslate += translateAmount;
    carousel.style.transform = `translateX(${currentTranslate}rem)`;
    currentIndex -= 1;
    // Move carousel to end
  } else {
    currentTranslate = translateMin;
    carousel.style.transform = `translateX(${currentTranslate}rem)`;
    currentIndex = items.length-1;
  };
};

// Button click support
nextBtn.addEventListener("click", moveCarouselRight);
prevBtn.addEventListener("click", moveCarouselLeft);

// Keyboard arrow right and left support
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (document.activeElement === document.body) {
    if (e.key === "ArrowRight") {
      moveCarouselRight();
    } else if (e.key === "ArrowLeft") {
      moveCarouselLeft();
    };
  };
});

// Variables for touch events
let startX = 0;
let endX = 0;

// Touch event handlers
carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
});

// carousel.addEventListener("touchmove", (e) => {
//   e.preventDefault();
// }, { passive: false });

carousel.addEventListener("touchend", () => {
    const diff = startX - endX;

    // Swipe left (next)
    if (diff > 50) {
        moveCarouselRight();
    }
    // Swipe right (prev)
    else if (diff < -50) {
        moveCarouselLeft();
    }
});