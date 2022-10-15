let map;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 39.6225826,
            lng: 19.9367651
        },
        zoom: 11,
        gestureHandling: "greedy",
    });

    const pagida1 = { lat: 39.624048, lng: 19.897758 }; /* dt-19 */

    const marker = new google.maps.Marker({
        position: pagida1,
        map: map
    });

    const infowindow = new google.maps.InfoWindow ({
        content: "<p>Topethesia" + marker.getPosition() + "</p>" +
        "<p>Dedomena kai periexomeno"+"</p>",
      });/*Vazoume dedomena sto parathuraki kai me ena div mporoume na kanoume kai css */
    
      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
}

window.initMap = initMap;

google.maps.event.addDomListener(window, 'load', initialize);
$(window).scroll(function(){
	//THE HEIGHT, PLUS THE MARGIN OR PADDING IT NEEDS TO BE FULLY COVERED
	if($(window).scrollTop()<$('#map').height() + 21) 
		$('#map').css({'transform':'translate(0px,'+$(window).scrollTop()+'px)'});
  $('h4').html($(window).scrollTop());
});