mapboxgl.accessToken = 'pk.eyJ1IjoidmllLWtoYXJhIiwiYSI6ImNtcThpbjZkczA0c3QycXEwa2FtMWgwazQifQ.IUvfXQ9fhVa3uea6u9j3_w';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/vie-khara/cmq8jah1d00aa01rf5hn5bfvk', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });