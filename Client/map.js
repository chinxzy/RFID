

function loadMap() {
    var mapOptions= {
        center:new google.maps.LatLng(6.719363, 3.4019291),
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        panControl: true,
        zommControl: true,
        scaleControl: true,
        mapTypeControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotaterControl: true,
    };
    var map=new google.maps.Map(document.getElementById("sample"), mapOptions);
}
