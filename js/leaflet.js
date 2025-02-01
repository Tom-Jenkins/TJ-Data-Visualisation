// ---------- //
// CONTACT LEAFLET MAP
// ---------- //

// Intitalise map and add tiles
const coords = [50.734135114897754, -3.533123160443835];
const map = L.map("map").setView(coords, 6);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    crs: L.CRS.EPSG3857,
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add marker
const marker = L.marker(coords).addTo(map);
