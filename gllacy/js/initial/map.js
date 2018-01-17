function initMap() {
    var myLatLng = {lat: 59.938538, lng: 30.324444};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: {lat: 59.939469, lng: 30.329744},
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Gllacy Shop",
        icon: {
        url: window.devicePixelRatio > 1 ? "my_icon96png" : "img/map-marker.png",
        scaledSize: new google.maps.Size(218, 142)
      }
    });
}