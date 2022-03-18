$(document).ready(function () {
    navigator.geolocation.getCurrentPosition(success, error, options);
})

var options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    localStorage.setItem('lat', crd.latitude);
    localStorage.setItem('lon', crd.longitude);
    localStorage.setItem('precision', crd.accuracy);
    localStorage.setItem('ubicacion_hora', pos.timestamp);
};

function error(err) {
    console.warn('geolocation error (' + err.code + '): ' + err.message);
};
