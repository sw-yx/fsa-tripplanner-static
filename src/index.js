var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
var buildMarker = require('./marker.js')
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic3d5eCIsImEiOiJjajY4M2hvcGYwY3lrMnZueXB2dDg5cWt5In0.7HkydSCJMjYLqxIxq5a-5A';
var map = new mapboxgl.Map({
container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
style: 'mapbox://styles/mapbox/dark-v9'
});

buildMarker('hotel', [-74.009, 40.705]).addTo(map);
buildMarker('activity', [-74.019, 40.705]).addTo(map);
buildMarker('activity', [-74.009, 40.715]).addTo(map);
buildMarker('restaurant', [-73.999, 40.695]).addTo(map);