"use strict";

// ---------- //
// CONTACT LEAFLET MAP
// ---------- //

// Intitalise map and add tiles
const coords = [50.734135114897754, -3.533123160443835];
const map = L.map("map").setView(coords, 4);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    crs: L.CRS.EPSG3857,
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add marker
const marker = L.marker(coords).addTo(map);


// ---------- //
// PROJECT ACCORDION
// ---------- //

// Get elements from DOM
const arrowLinks = document.querySelectorAll(".project__arrow");

// Open or close accordion when arrow is clicked
arrowLinks.forEach(link => {
    link.addEventListener("click", function () {

        const accordionID = document.getElementById(`accordion--${link.dataset.target}`);

        if (link.classList.contains("accordion--active")) {
            accordionID.classList.remove("accordion--open"); // close accordion
            link.classList.remove("accordion--active"); // rotate arrow to original position
        } else {
            accordionID.classList.add("accordion--open"); // open accordion
            link.classList.add("accordion--active"); // rotate arrow
        };
    });
});

