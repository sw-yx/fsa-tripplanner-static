const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotel: "http://i.imgur.com/WbMOfMl.png",
  restaurant: "http://i.imgur.com/D9574Cu.png",
  activity: "http://i.imgur.com/cqR6pUI.png"
};

const buildMarker = (type, coords) => {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;

    return new mapboxgl.Marker(markerDomEl).setLngLat(coords); //.addTo(map);
};

module.exports = buildMarker;