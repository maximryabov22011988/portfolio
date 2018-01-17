ymaps.ready(function () {
var myMap = new ymaps.Map("yandex-map", {
            center: [34.865966, -111.763806],
            zoom: 9,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });
});