var marker;

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: {lat: 59.938790, lng: 30.323082},
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
      position: {lat: 59.938790, lng: 30.323082},
      title:"г. Санкт-Петербург, ул. Большая Конюшенная, д.19"
    });
    marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}