let map;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 39.6225826,
            lng: 19.9367651
        },
        zoom: 11,
    });

    const pagida1 = { lat: 39.624048, lng: 19.897758 }; /* dt-19 */

    const marker = new google.maps.Marker({
        position: pagida1,
        map: map
    });
}

window.initMap = initMap;