let map, heatmap;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 39.6225826,
            lng: 19.9367651
        },
        zoom: 11,
        gestureHandling: "greedy",
    });

    //gia heatmap
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map,
    });

    //gia heatmap
    function getPoints(){
        return[
            {location: new google.maps.LatLng(39.624048,19.897758), weight: 0.5},
            {location: new google.maps.LatLng(39.624048,19.898758),  weight: 2},
            new google.maps.LatLng(39.624048,19.898458),
            new google.maps.LatLng(39.624048,19.898487),  
        ];
    }

    //gia heatmap
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map,
    });

    heatmap.set("radius", heatmap.get("radius") ? null : 50);
    //gia heatmap
    function getPoints(){
        return[
            {location: new google.maps.LatLng(39.624048,19.897758), weight: 5},
            {location: new google.maps.LatLng(39.624048,19.898758),  weight: 2},
            {location: new google.maps.LatLng(39.624048,19.899458), weight: 10},
            new google.maps.LatLng(39.624048,19.898487),  
        ];
    }

    const pagida1 = {
        lat: 39.624048,
        lng: 19.897758
    }; /* dt-19 */

    const marker = new google.maps.Marker({
        position: pagida1,
        map: map,
        title: "DT02"
    });

    const infowindow = new google.maps.InfoWindow({
        content: marker.title + "<p>Topethesia" + marker.getPosition() + "</p>" +
            "<p> data" + "</p>",
    }); /*Vazoume dedomena sto parathuraki kai me ena div mporoume na kanoume kai css */

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}

window.initMap = initMap;