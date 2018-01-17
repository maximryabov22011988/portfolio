var marker;

function initMap() {
    var map = new google.maps.Map(document.getElementById("googleMaps"), {
      zoom: 18,
      center: {lat: 55.687030, lng: 37.529618},
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
    });

    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: 55.687030, lng: 37.529618},
      title:"г. Москва, ул. Строителей, 15"
    });
}
