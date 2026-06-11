mapboxgl.accessToken = 'pk.eyJ1IjoidmllLWtoYXJhIiwiYSI6ImNtcThpbjZkczA0c3QycXEwa2FtMWgwazQifQ.IUvfXQ9fhVa3uea6u9j3_w';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/vie-khara/cmq8jah1d00aa01rf5hn5bfvk', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });
map.on('load', function() {
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/viekhara/Folsom-SRA/refs/heads/main/data.geojson'
    });
map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#4264FB',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });
map.on('click', 'points-layer', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const properties = e.features[0].properties;

    const popupContent = `
        <div>
            <h3>${properties.feature_name}</h3>
            ${properties.Images ? `<img src="${properties.Images}" alt="${properties.feature_name}" style="width:100%; border-radius:5px; margin-bottom:10px;">` : ''}
            ${properties['Image description '] ? `<p>${properties['Image description ']}</p>` : ''}
            ${properties.rop_renaming_meaning ? `<p><strong>Meaning:</strong> ${properties.rop_renaming_meaning}</p>` : ''}
            ${properties.rop_renaming_tribal_partner ? `<p><strong>Tribal Partner:</strong> ${properties.rop_renaming_tribal_partner}</p>` : ''}
        </div>
    `;

    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map);
});
});
