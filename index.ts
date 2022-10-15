let map: google.maps.Map;


function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: {
        lat: 39.6225826,
        lng: 19.9367651,
      } /* syntetagmenens kerkyras */,
      zoom: 11,
    }
  );

  const pagida1 = { lat: 39.624048, lng: 19.897758 }; /* dt-19 */

  const marker = new google.maps.Marker({
    position: pagida1,
    map: map,
  });

  const infowindow = new google.maps.InfoWindow ({
    content: "<p>Topethesia" + marker.getPosition() + "</p>",
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });

}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
